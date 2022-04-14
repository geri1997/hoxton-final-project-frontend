import { useState } from "react"
import ReactPaginate from "react-paginate"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import "./GenrePage.css"

export default function GenrePage({validateUser}:any) {

    const [pageNumber, setPageNumber] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(4)

    let pagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(50 / itemsPerPage)

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
    
    return (

        <>

            <div className="genre-wrapper-menus">

                <HeaderCommon />
                
                <div className="genre-ribbon-1">

                    
                    <div className="image-ribbon-1-genre-wrapper">

                        <div className="movie-item-genre">

                            <img src="/assets/images/foto1.png" />
                            <span className="movie-title">Moon Knight</span>
                            
                            <div className="genres-holder-span">
                                <span>Action</span>
                                <span>Thriller</span>
                                <span>Comedy</span>
                            </div>

                            <span className="imdb-span">IMDB 7.5</span>
                            
                        </div>

                        <div className="movie-item-genre">

                            <img src="/assets/images/foto1.png" />
                            <span className="movie-title">Moon Knight</span>

                            <div className="genres-holder-span">
                                <span>Action</span>
                                <span>Thriller</span>
                                <span>Comedy</span>
                            </div>

                            <span className="imdb-span">IMDB 7.5</span>

                        </div>

                        <div className="movie-item-genre">

                            <img src="/assets/images/foto1.png" />
                            <span className="movie-title">Moon Knight</span>

                            <div className="genres-holder-span">
                                <span>Action</span>
                                <span>Thriller</span>
                                <span>Comedy</span>
                            </div>

                            <span className="imdb-span">IMDB 7.5</span>

                        </div>

                        <div className="movie-item-genre">

                            <img src="/assets/images/foto1.png" />
                            <span className="movie-title">Moon Knight</span>

                            <div className="genres-holder-span">
                                <span>Action</span>
                                <span>Thriller</span>
                                <span>Comedy</span>
                            </div>

                            <span className="imdb-span">IMDB 7.5</span>

                        </div>

                    </div>
                
                    <ReactPaginate
                        previousLabel={"< Previous"}
                        nextLabel={"Next >"}
                        pageCount={30}
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