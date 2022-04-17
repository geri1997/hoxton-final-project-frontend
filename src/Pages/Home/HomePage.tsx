// #region "Importing stuff"
import Carousel from "@palustris/react-images";
import { useEffect, useState } from "react";
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
    
    function handleChangingPageNumberToZero(number:any) {
        setPageNumber(number)
    }

    const changePage = ({ selected }:any) => {

        if (pagesVisited > 20) {
            handleChangingPageNumberToZero(0)
        }

        else {
            handleChangingPageNumber(selected)
        }
        
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

    function getMoviesFromServer(): void {

        fetch(`http://localhost:4000/movies/page/1`)
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
    // const imagesPath = [
    //     movies[0]?.photoSrc,
    //     movies[5]?.photoSrc,
    //     movies[10]?.photoSrc,
    //     movies[20]?.photoSrc,
    //     movies[35]?.photoSrc
    // ]

    // console.log(imagesPath)

    // const images = [
    //     { source: movies[0]?.photoSrc!},
    //     { source: movies[5]?.photoSrc!},
    //     { source: movies[30]?.photoSrc!},
    //     { source: movies[20]?.photoSrc!},
    //     { source: movies[15]?.photoSrc!}
    // ];

    // const images = [
    //     { source: "http://www.filma24.so/wp-content/uploads/rsz_fistful_of_vengeance.png"},
    //     { source: "http://www.filma24.so/wp-content/uploads/rsz_bwwalkuairbi7ntvjkgcui5y1dn.png"},
    //     { source: "http://www.filma24.so/wp-content/uploads/msKnqw1OMiJnQQ7rOFh8Syglxfm-1.jpg"},
    //     { source: "http://www.filma24.so/wp-content/uploads/rsz_wljewwoumhhbw2hxkp8leoqvq1l.png"},
    //     { source: "http://www.filma24.so/wp-content/uploads/2015/07/rsz_rlivdea2ezzojlf9xahwz2utu8x.png"}
    // ];

    const images = [
        { source: "/assets/images/movies/rsz_fistful_of_vengeance.png"},
        { source: "/assets/images/movies/msKnqw1OMiJnQQ7rOFh8Syglxfm-1.jpg"},
        { source: "/assets/images/movies/rsz_bwwalkuairbi7ntvjkgcui5y1dn.png"},
        { source: "/assets/images/movies/rsz_wljewwoumhhbw2hxkp8leoqvq1l.png"},
        { source: "/assets/images/movies/rsz_rlivdea2ezzojlf9xahwz2utu8x.png"}
    ];
    // #endregion

    return (

        <>

            <div className="home-wrapper-menus">

                <HeaderCommon />

                <div className="home-ribbon-1">
                    <Carousel views={images} />
                </div>

                <div className="home-ribbon-2">

                    <ul className="list-sort">
                        <li>Latest movies</li>
                        <li>Most viewed</li>
                        <li>IMDB</li>
                        <li>A-Z</li>
                    </ul>
                    
                    <div className="image-ribbon-2-wrapper">

                        {
                            //@ts-ignore
                            movies?.map(movie => 
                                
                                <div className="movie-item">

                                    <img src="/assets/images/foto1.png" />
                                    <span className="movie-title">{movie.title}</span>

                                    <div className="genres-holder-span">
                                        <span>Action</span>
                                        <span>Thriller</span>
                                        <span>Comedy</span>
                                    </div>

                                    <span className="imdb-span">{movie.ratingImdb}</span>

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
                        {/* <li>View All</li> */}

                    </ul>
                    
                    <div className="image-ribbon-3-wrapper">

                        {

                            //@ts-ignore
                            latestMovies?.map(latestMovie =>
                                
                                <div className="movie-item-latest">

                                    <img src="/assets/images/foto1.png" />
                                    <span className="movie-title">{latestMovie.title}</span>
                                    
                                    <div className="genres-holder-span">
                                        <span>Action</span>
                                        <span>Thriller</span>
                                        <span>Comedy</span>
                                    </div>
        
                                    <span className="imdb-span">{latestMovie.ratingImdb}</span>
                                    
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