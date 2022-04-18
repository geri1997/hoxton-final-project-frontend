// #region "Importing stuff"
import Carousel from "@palustris/react-images";
import { useCallback, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import ReactPaginate from "react-paginate";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import { useStore } from "../../Zustand/store";
import "./HomePage.css"
// #endregion

export default function HomePage({validateUser}:any) {

    // #region "Validating user if its logged in in each page, localstorage way"
    useEffect(() => {
        validateUser();
    }, []);
    // #endregion

    // #region "Getting movie count"
    const [moviesCount, setMoviesCount] = useState<any>()

    function getMovieCountFromServer(): void {

        fetch(`http://localhost:4000/movie-count`)
        .then(resp => resp.json())
        .then(movieCountFromServer => setMoviesCount(movieCountFromServer))

    }
    useEffect(getMovieCountFromServer, [])
    // #endregion

    // #region "Pagination in frontend"
    const [pageNumber, setPageNumber] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(20)

    let pagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(moviesCount?.count / itemsPerPage)

    function handleChangingPageNumber(selected:any) {
        setPageNumber(selected)
    }
    
    const changePage = ({ selected }:any) => {
        handleChangingPageNumber(selected)
        getMoviesFromServer(selected)
    }
    // #endregion

    // #region "Getting and movies stuff"
    const { movies, setMovies, latestMovies, setLatestMovies, genres, setGenres } = useStore()

    // function getMoviesFromServer(): void {

    //     fetch(`http://localhost:4000/movies`)
    //     .then(resp => resp.json())
    //     .then(moviesFromServer => setMovies(moviesFromServer))

    // }
    // useEffect(getMoviesFromServer, [])

    function getMoviesFromServer(pageNr = 0): void {

        fetch(`http://localhost:4000/movies/page/${pageNr + 1}`)
        .then(resp => resp.json())
        .then(moviesFromServer => setMovies(moviesFromServer))

    }

    useEffect(getMoviesFromServer, [])

    function getLatestMoviesFromServer(): void {

        fetch(`http://localhost:4000/latest`)
        .then(resp => resp.json())
        .then(latestMoviesFromServer => setLatestMovies(latestMoviesFromServer))

    }
    useEffect(getLatestMoviesFromServer, [])
    // #endregion

    // #region "Checking stuff wich came from server"
    if (!movies) {

        return (
            <div className="loading-wrapper">
                <ReactLoading type={"spin"} color={"#000"} height={200} width={100} className="loading" />
            </div>
        )    
    
    }

    // if (movies === null || undefined) {
    //     <main>Loading...</main>
    // }
    // #endregion

    // #region "Carousel stuff images etc"
    let imagesCopy: any = []

    // if (movies[0].photoSrc !== undefined) {

    //     const images = [
    //         { source: movies[15].photoSrc},
    //         { source: movies[16].photoSrc},
    //         { source: movies[17].photoSrc},
    //         { source: movies[18].photoSrc},
    //         { source: movies[19].photoSrc}
    //     ];

    //     // console.log(movies[19].photoSrc)
    //     imagesCopy = images

    // }

    // else {

        const images = [
            { source: "/assets/images/movies/rsz_fistful_of_vengeance.png"},
            { source: "/assets/images/movies/msKnqw1OMiJnQQ7rOFh8Syglxfm-1.jpg"},
            { source: "/assets/images/movies/rsz_bwwalkuairbi7ntvjkgcui5y1dn.png"},
            { source: "/assets/images/movies/rsz_wljewwoumhhbw2hxkp8leoqvq1l.png"},
            { source: "/assets/images/movies/rsz_rlivdea2ezzojlf9xahwz2utu8x.png"}
        ];

        imagesCopy = images

    // }

    // #endregion

    return (

        <>

            <div className="home-wrapper-menus">

                <HeaderCommon />

                <div className="home-ribbon-1">
                    <Carousel views={imagesCopy} />
                </div>

                <div className="home-ribbon-2">

                    <h3>Sort By: </h3>

                    <ul className="list-sort">
                        {/* <li>Latest movies</li> */}
                        <li>Most viewed</li>
                        <li>Imdb</li>
                        <li>A-Z</li>
                    </ul>
                    
                    <div className="image-ribbon-2-wrapper">

                        {
                            
                            //@ts-ignore
                            movies?.map(movie => 
                                
                                <div className="movie-item">

                                    <img src={movie.photoSrc} />
                                    <span className="movie-title">{movie.title}</span>

                                    <div className="genres-holder-span">

                                        {

                                            //@ts-ignore
                                            movie.genres.map(genre => 
                                                <span>{genre.genre.name}</span>
                                            )

                                        }
                                        
                                    </div>

                                    <span className="imdb-span">{ movie.ratingImdb !== 0 ? "Imdb: " + movie.ratingImdb : "Imdb: " + "N/A" }</span>

                                </div>

                            )

                        }

                    </div>

                    <ReactPaginate
                        previousLabel={"< Previous"}
                        nextLabel={"Next >"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />

                </div>

                <div className="home-ribbon-3">

                    <ul className="list-latest">
                        <li className="special-last">LATEST MOVIES</li>
                    </ul>
                    
                    <div className="image-ribbon-3-wrapper">

                        {

                            //@ts-ignore
                            latestMovies?.map(latestMovie =>
                                
                                <div className="movie-item-latest">

                                    <img src={latestMovie.photoSrc} />
                                    <span className="movie-title">{latestMovie.title}</span>
                                    
                                    

                                    <div className="genres-holder-span">

                                        {

                                            //@ts-ignore
                                            latestMovie.genres.map(genre => 
                                                <span>{genre.genre.name}</span>
                                            )

                                        }

                                    </div>

                                    <span className="imdb-span">{ latestMovie.ratingImdb !== 0 ? "Imdb: " + latestMovie.ratingImdb : null }</span>
                                    
                                </div>

                            )

                        }

                    </div>
                
                </div>

                <FooterCommon />

            </div>
        
        </>

    )

}