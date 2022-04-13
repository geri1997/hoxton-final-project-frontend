import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon';
import HeaderCommon from '../../Components/Common/HeaderCommon/HeaderCommon';
import { useStore } from '../../Zustand/store';
import "./ProfilePage.css"

export default function ProfilePage({validateUser}:any) {

    // #region "state"
    const [tab, setTab] = useState<any>("home")
    const { user, userItem, setUserItem, users } = useStore()
    // #endregion

    // #region "fetch things"
    useEffect(() => {
        validateUser();
    }, []);

    const params = useParams()

    // function getIndividualUserFromServer () {

    //     fetch(`http://localhost:4000/users/${params.id}`)
    //         .then(resp => resp.json())
    //         .then(userFromServer => setUserItem(userFromServer))
        
    // }
    
    // useEffect(getIndividualUserFromServer, [])
    // #endregion

    // #region "Checking stuff from server wich came and loading"

    // if (userItem === null) {

    //     return (
    //         <div className="loading-wrapper">
    //             <ReactLoading type={"spin"} color={"#000"} height={200} width={100} className="loading" />
    //         </div>
    //     )    
    
    // }

    // if (userItem.userName === undefined) {
    //     return <main>User not found not found</main>
    // }

    // if(user === null) {

    //     return (
    //         <div className="loading-wrapper">
    //             <ReactLoading type={"spin"} color={"#000"} height={200} width={100} className="loading" />
    //         </div>
    //     )
        
    // }

    // #endregion

    // const userCheck = user.userName === userItem.userName

    return (

        <main>

            <HeaderCommon />

            <section className="container-profile-menus">

                <div className="container-profile-nav">

                    <div className="profile-info">

                        <img src="/assets/avatars/blankavatar.jpg" />
                        {/* <img src={`http://localhost:4000/avatar/${userItem.userName}`} /> */}
                        {/* <span className="subscribe-span">{userItem.countSubscribers} Subscribers</span>
                        <span className="userName-span">{userItem.userName}</span> */}
                        <span className="userName-span">Avenger22</span>

                    </div>

                </div>

                <div className="container-tabs">

                    <ul className="list-tabs">

                        <li className= {tab === "movies" ? "clicked": "videos-tab"} onClick={() => {
                            setTab("movies")
                        }}>Favorite Movies</li>
                        
                        <li className= {tab === "about" ? "clicked": "about-tab"} onClick={() => {
                            setTab("about")
                        }}>About Channel</li>

                    </ul>

                    { 

                        tab === "movies" ? (

                            <>
                            
                                <h3 className="special-video-you">Bookmarked movies</h3>

                                <div className="container-videos">

                                    {

                                        // @ts-ignore
                                        // user?.videos?.map(video => 

                                            // <HomeVideo 
                                            //     key = {video.id}
                                            //     video = {null}
                                            //     liked = {"not"}
                                            //     videoLiked = {null}
                                            //     videoSaved = {null}
                                            //     user = {user}
                                            //     videoMine = {video}
                                            // />

                                        // )

                                    }

                                </div>

                            </>

                        ): tab === "about" ? (

                            <div className="container-about">
                                {/* <span>{user?.description}</span> */}
                                <span>This is my account</span>
                            </div>

                        ):null

                    }

                </div>

            </section>

            <FooterCommon />
        
        </main>

    )
    
}