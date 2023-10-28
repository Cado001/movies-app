import { useState } from "react";

function SingleMovieComponent(props) {
    console.log('props ->', props)
    return (
        <div className="movie-item">
            <h3>{props.title}</h3>
            <img src={props.posterURL} alt="" />
        </div>
    )
}

export default function Home() {
    const [movieItems, setMovieItems] = useState()


    const handleBtnClick = () => {
        fetch('https://api.sampleapis.com/movies/horror')
            .then(res => res.json())
            .then(data => setMovieItems(data))
            .catch(x => console.error(x))

    }

return (
    <section className="movie-items">
        {!movieItems

                ? <button onClick={() => handleBtnClick()}>Movie List</button>

                : movieItems.map(singleItem => {
                    return (
                        <SingleMovieComponent
                            title={singleItem.title}
                            posterURL={singleItem.posterURL} />
                    )
                })
            }
            </section>
)
}
