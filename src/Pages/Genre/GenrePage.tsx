import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import "./GenrePage.css"

export default function GenrePage({validateUser}:any) {

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
                
                </div>

                <FooterCommon />

            </div>

        </>

    )

}