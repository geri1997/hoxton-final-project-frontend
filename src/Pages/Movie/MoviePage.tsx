// #region "Importing"
import { useNavigate, useParams } from 'react-router-dom';
import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon';
import ReactLoading from 'react-loading';
import HeaderCommon from '../../Components/Common/HeaderCommon/HeaderCommon';
import { useStore } from '../../Zustand/store';
import { useEffect } from 'react';
import './MoviePage.css';
// #endregion

export default function MoviePage({ validateUser }: any) {
    // #region "State and other hooks"
    const params = useParams();
    const navigate = useNavigate();

    const {
        movieItem,
        setMovieItem,
        latestMovies,
        setLatestMovies,
        setUser,
        user,
    } = useStore();
    // #endregion

    // #region "Validating user if its logged in in each page, localstorage way"
    useEffect(() => {
        validateUser();
    }, []);
    // #endregion

    // #region "Getting and movies stuff"
    function getMovieItemFromServer(): void {
        fetch(`https://petite-locrian-piper.glitch.me/movie/${params.title}`)
            .then((resp) => resp.json())
            .then((data) => {
                setMovieItem(data);
            });
    }

    useEffect(getMovieItemFromServer, [params.title]);

    function getLatestMoviesFromServer(): void {
        fetch(`https://petite-locrian-piper.glitch.me/latest`)
            .then((resp) => resp.json())
            .then((latestMoviesFromServer) =>
                setLatestMovies(latestMoviesFromServer)
            );
    }
    useEffect(getLatestMoviesFromServer, []);
    // #endregion

    // #region "Adding to favorites feature"
    function addToFavorites() {
        fetch(`https://petite-locrian-piper.glitch.me/favorites`, {
            method: 'POST',

            headers: {
                'content-type': 'application/json',
                Authorization: localStorage.token,
            },

            body: JSON.stringify({
                movieId: movieItem?.id,
            }),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setUser(data);
            });
    }
    // #endregion

    // #region "Checking stuff wich came from server"
    if (movieItem?.title === null) {
        return (
            <div className='loading-wrapper'>
                <ReactLoading
                    type={'spin'}
                    color={'#000'}
                    height={200}
                    width={100}
                    className='loading'
                />
            </div>
        );
    }
    // #endregion

    return (
        <>
            <HeaderCommon />

            <section className='movie-item-wrapper'>
                <div className='left-section'>
                    <div className='video-and-servers'>
                        <div className='servers'>
                            <ul className='server-list'>
                                <li>Movie Server</li>
                            </ul>
                        </div>

                        <div className='video-square'>
                            {/* @ts-ignore */}
                            <iframe
                                src={movieItem?.videoSrc}
                                name='movieFrame'
                                scrolling='no'
                                frameBorder={0}
                                height='550px'
                                width='850px'
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className='movie-details'>
                            <div className='movie-specifications'>
                                <ul className='trailer'>
                                    <li>Trailer: </li>
                                    <a
                                        href={movieItem?.trailerSrc}
                                        className='trailer-link'
                                    >
                                        Youtube trailer
                                    </a>
                                </ul>

                                <ul className='length'>
                                    <li>Duration: {movieItem?.duration}</li>
                                    <li>Year: {movieItem?.releaseYear}</li>
                                    <li>
                                        Imdb Rating:{' '}
                                        {movieItem?.ratingImdb === 0
                                            ? 'N/A'
                                            : movieItem?.ratingImdb}
                                    </li>
                                </ul>

                                {user?.userName ? (
                                    <button
                                        className='button-favorite-add'
                                        onClick={function () {
                                            addToFavorites();
                                            navigate('/profile');
                                            window.scrollTo(0, 0);
                                        }}
                                    >
                                        Add to favorites
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className='movie-fabula'>
                        <p id='fabula'>{movieItem?.description}</p>
                    </div>

                    <div className='last movies'>
                        <div className='posted-lastest'>
                            <h2>Latest Movies</h2>
                        </div>

                        <ul className='last-movies-list'>
                            {
                                //@ts-ignore
                                latestMovies
                                    .slice(14, 19)
                                    .map((latestMovie) => (
                                        <li
                                            key={latestMovie.id}
                                            onClick={function () {
                                                //@ts-ignore
                                                navigate(
                                                    `../movies/${latestMovie.title
                                                        .split('')
                                                        .map((char) =>
                                                            char === ' '
                                                                ? '-'
                                                                : char
                                                        )
                                                        .join('')}`
                                                );
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            <img src={latestMovie.photoSrc} />
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
                </div>

                <div className='right-section'>
                    <ul>
                        <li>
                            <img
                                src='https://i.imgur.com/5wdcyDG.gif'
                                alt='ddf'
                            />
                        </li>

                        <li>
                            <img
                                src='https://www.filma24.so/genti300x300.gif'
                                alt='ggg'
                            />
                        </li>

                        <li>
                            <img
                                src='https://i.imgur.com/Wl3zKCb.jpg'
                                alt='eee'
                            />
                        </li>
                    </ul>
                </div>
            </section>

            <FooterCommon />
        </>
    );
}
