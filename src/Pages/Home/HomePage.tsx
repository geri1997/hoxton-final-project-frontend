import Carousel from "@palustris/react-images";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";

import "./HomePage.css"

export default function HomePage() {

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

    const images = [
        { source: "/assets/images/foto1.png"},
        { source: "/assets/images/foto1.png"},
        { source: "/assets/images/foto1.png"},
        { source: "/assets/images/foto1.png"},
        { source: "/assets/images/foto1.png"}
    ];

    return (

        <>

            <div className="home-wrapper-menus">

                <HeaderCommon />

                <div className="home-ribbon-1">

                    <Carousel views={images} />
                    
                    {/* <div className="image-ribbon-1-wrapper">
                        <img src="/assets/images/foto1.png" />
                    </div>

                    <div className="image-ribbon-1-wrapper">
                        <img src="/assets/images/foto1.png" />
                    </div>

                    <div className="image-ribbon-1-wrapper">
                        <img src="/assets/images/foto1.png" />
                    </div>

                    <div className="image-ribbon-1-wrapper">
                        <img src="/assets/images/foto1.png" />
                    </div>

                    <div className="image-ribbon-1-wrapper">
                        <img src="/assets/images/foto1.png" />
                    </div> */}

                </div>

                <div className="home-ribbon-2">

                    <ul className="list-sort">

                        <li>Latest movies</li>
                        <li>Most viewed</li>
                        <li>IMDB</li>
                        <li>A-Z</li>

                    </ul>
                    
                    <div className="image-ribbon-2-wrapper">

                        <div className="movie-item">

                            <img src="/assets/images/foto1.png" />
                            <span className="movie-title">Moon Knight</span>

                            <div className="genres-holder-span">
                                <span>Action</span>
                                <span>Thriller</span>
                                <span>Comedy</span>
                            </div>

                            <span className="imdb-span">IMDB 7.5</span>

                        </div>

                        <div className="movie-item">

                            <img src="/assets/images/foto1.png" />
                            <span className="movie-title">Moon Knight</span>

                            <div className="genres-holder-span">
                                <span>Action</span>
                                <span>Thriller</span>
                                <span>Comedy</span>
                            </div>

                            <span className="imdb-span">IMDB 7.5</span>

                        </div>

                        <div className="movie-item">

                            <img src="/assets/images/foto1.png" />
                            <span className="movie-title">Moon Knight</span>

                            <div className="genres-holder-span">
                                <span>Action</span>
                                <span>Thriller</span>
                                <span>Comedy</span>
                            </div>

                            <span className="imdb-span">IMDB 7.5</span>

                        </div>

                        <div className="movie-item">
                            
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

                <div className="home-ribbon-3">

                    <ul className="list-latest">

                        <li>LATEST MOVIES</li>
                        <li>ALL MOVIES</li>

                    </ul>
                    
                    <div className="image-ribbon-3-wrapper">

                        <div className="movie-item-latest">

                            <img src="/assets/images/foto1.png" />
                            <span className="movie-title">Moon Knight</span>
                            
                            <div className="genres-holder-span">
                                <span>Action</span>
                                <span>Thriller</span>
                                <span>Comedy</span>
                            </div>

                            <span className="imdb-span">IMDB 7.5</span>
                            
                        </div>

                        <div className="movie-item-latest">

                            <img src="/assets/images/foto1.png" />
                            <span className="movie-title">Moon Knight</span>

                            <div className="genres-holder-span">
                                <span>Action</span>
                                <span>Thriller</span>
                                <span>Comedy</span>
                            </div>

                            <span className="imdb-span">IMDB 7.5</span>

                        </div>

                        <div className="movie-item-latest">

                            <img src="/assets/images/foto1.png" />
                            <span className="movie-title">Moon Knight</span>

                            <div className="genres-holder-span">
                                <span>Action</span>
                                <span>Thriller</span>
                                <span>Comedy</span>
                            </div>

                            <span className="imdb-span">IMDB 7.5</span>

                        </div>

                        <div className="movie-item-latest">

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
                
                </div>

                <FooterCommon />

            </div>
        
        </>

    )

}