// #region "Importing"
import { useEffect, useState } from "react"
import ReactLoading from "react-loading"
import ReactPaginate from "react-paginate"
import { useNavigate, useParams } from "react-router"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import { useStore } from "../../Zustand/store"
import "./GenrePage.css"
// #endregion

export default function GenrePage({validateUser}:any) {

    const params = useParams()
    const navigate = useNavigate()

    const { movies, setMovies } = useStore()

    // #region "Validating user if its logged in in each page, localstorage way"
    useEffect(() => {
        validateUser();
    }, []);
    // #endregion

    // #region "Pagination Feature"
    const [pageNumber, setPageNumber] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(20)
    const [moviesCountGenre, setMoviesCountGenres] = useState<any>(0)

    let pagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(moviesCountGenre / itemsPerPage)

    function handleChangingPageNumber(selected:any) {
        setPageNumber(selected)
    }
    
    const changePage = ({ selected }:any) => {
        handleChangingPageNumber(selected)
        getMoviesFromServerOnGenre(selected)
    }
    // #endregion
    
    // #region "Getting and movies stuff"
    function getMoviesFromServerOnGenre(pageNr = 0): void {

        fetch(`http://localhost:4000/genres/${params.name}?page=${pageNr + 1}`)
        .then(resp => resp.json())
        .then(moviesFromServer => {
            setMovies(moviesFromServer.movies)
            setMoviesCountGenres(moviesFromServer.count)
        })

    }

    useEffect(getMoviesFromServerOnGenre, [])
    // #endregion
    
    // #region "Checking stuff wich came from server"
    if (movies[0]?.title === undefined || movies[0]?.title === null) {

        return (
            <div className="loading-wrapper">
                <ReactLoading type={"spin"} color={"#000"} height={200} width={100} className="loading" />
            </div>
        )    
    
    }

    return (

        <>

            <div className="genre-wrapper-menus">

                <HeaderCommon />
                
                <div className="genre-ribbon-1">

                    <div className="image-ribbon-1-genre-wrapper">

                        {
                            
                            //@ts-ignore
                            movies?.map(movie => 
                                
                                <div className="movie-item-genre" key={movie.id}>

                                    <img src={movie?.photoSrc} />
                                    <span className="movie-title">{movie?.title}</span>

                                    <div className="genres-holder-span">

                                        {

                                            //@ts-ignore
                                            movie?.genres.map(genre => 

                                                <span key={genre.genre.name} onClick={function (e) {
                                                    e.stopPropagation()
                                                    navigate(`/genres/${genre.genre.name}`)

                                                }}>{genre.genre.name}</span>
                                                
                                            )

                                        }
                                        
                                    </div>

                                    <span className="imdb-span">{ movie?.ratingImdb !== 0 ? "Imdb: " + movie?.ratingImdb : "Imdb: " + "N/A" }</span>

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

                <FooterCommon />

            </div>

        </>

    )

}