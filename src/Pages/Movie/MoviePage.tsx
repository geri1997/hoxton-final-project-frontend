import { useEffect } from "react";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import { useStore } from "../../Zustand/store";
import "./MoviePage.css";

export default function MoviePage({ validateUser }: any) {

    const params = useParams()
    const navigate = useNavigate()

    const { movieItem, setMovieItem, latestMovies, setLatestMovies } = useStore()

    // #region "Validating user if its logged in in each page, localstorage way"
    useEffect(() => {
        validateUser();
    }, []);
    // #endregion

    // #region "Getting and movies stuff"
    function getMovieItemFromServer(): void {

        fetch(`http://localhost:4000/movie/${params.title}`)
        .then(resp => resp.json())
        .then(data => {
            setMovieItem(data)
        })

    }

    useEffect(getMovieItemFromServer, [params.title])

    function getLatestMoviesFromServer(): void {

        fetch(`http://localhost:4000/latest`)
        .then(resp => resp.json())
        .then(latestMoviesFromServer => setLatestMovies(latestMoviesFromServer))

    }
    useEffect(getLatestMoviesFromServer, [])
    // #endregion
    
    // #region "Checking stuff wich came from server"
    if (movieItem?.title === null) {

        return (
            <div className="loading-wrapper">
                <ReactLoading type={"spin"} color={"#000"} height={200} width={100} className="loading" />
            </div>
        )    
    
    }
    // #endregion
    
    return (

        <>

            <HeaderCommon />

            <section className="movie-item-wrapper">

                <div className="left-section">

                    <div className="video-and-servers">

                        <div className="servers">

                            <ul className="server-list">
                                <li>Movie Server</li>
                            </ul>

                        </div>

                        <div className="video-square">

                            {/* @ts-ignore */}
                            <iframe src={movieItem?.videoSrc} name="movieFrame" scrolling="no" frameBorder={0} height="550px" width="850px" allowFullScreen></iframe>

                        </div>

                        <div className="movie-details">

                            <div className="movie-specifications">

                                <ul className="trailer">
                                    <li>Trailer: </li>
                                    <a href={movieItem?.trailerSrc} className="trailer-link">Youtube trailer</a>
                                </ul>

                                <ul className="length">
                                    <li>Duration: {movieItem?.duration}</li>
                                    <li>Year: {movieItem?.releaseYear}</li>
                                    <li>Imdb Rating: {movieItem?.ratingImdb}</li>
                                </ul>

                            </div>

                        </div>

                    </div>

                    <div className="movie-fabula">

                        <p id="fabula">
                            {movieItem?.description}
                        </p>

                    </div>

                    <div className="last movies">

                        <div className="posted-lastest">
                            <h2>Latest Movies</h2>
                        </div>

                        <ul className="last-movies-list">

                            {

                                //@ts-ignore
                                latestMovies.slice(14, 19).map(latestMovie => 
                                    
                                    <li key={latestMovie.id} onClick={function () {
                                        //@ts-ignore
                                        navigate(`../movies/${ latestMovie.title.split('').map((char) => (char === ' ' ? '-' : char)).join('') }`)
                                    }}>

                                        <img
                                            src={latestMovie.photoSrc}
                                        />

                                    </li>

                                )

                            }
                            
                        </ul>

                    </div>

                </div>

                <div className="right-section">

                    <ul>

                        <li>
                            <img src="https://www.filma24.so/kazinodhjetor.gif" alt="ggg" />
                        </li>

                        <li>
                            <img src="https://i.imgur.com/5wdcyDG.gif" alt="ddf" />
                        </li>

                        <li>
                            <img src="https://www.filma24.so/genti300x300.gif" alt="sss" />
                        </li>

                        <li>

                            <img
                                src="https://www.filma24.so/genti300x300.gif"
                                alt="ggg"
                            />

                        </li>

                        <li>
                            <img src="https://i.imgur.com/Wl3zKCb.jpg" alt="eee" />
                        </li>

                    </ul>

                </div>

            </section>

            <FooterCommon />

        </>

    )

}