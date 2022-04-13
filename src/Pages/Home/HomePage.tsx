import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./HomePage.css"

export default function HomePage() {

    return (

        <>

            <div className="home-wrapper-menus">

                <HeaderCommon />

                <div className="home-ribbon-1">
                    
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
                    </div>

                    <div className="image-ribbon-1-wrapper">
                        <img src="/assets/images/foto1.png" />
                    </div>

                </div>

                <div className="home-ribbon-2">

                    <ul className="list-sort">

                        <li>Latest movies</li>
                        <li>Most viewed</li>
                        <li>Imdb</li>
                        <li>A-Z</li>

                    </ul>
                    
                    <div className="image-ribbon-2-wrapper">

                        <div className="movie-item">
                            <img src="/assets/images/foto1.png" />
                        </div>

                        <div className="movie-item">
                            <img src="/assets/images/foto1.png" />
                        </div>

                        <div className="movie-item">
                            <img src="/assets/images/foto1.png" />
                        </div>

                        <div className="movie-item">
                            <img src="/assets/images/foto1.png" />
                        </div>

                    </div>


                </div>

                <FooterCommon />

            </div>
        
        </>

    )

}