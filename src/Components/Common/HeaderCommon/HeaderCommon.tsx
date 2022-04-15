import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../../Zustand/store";
import "./HeaderCommon.css"

export default function HeaderCommon() {
    
    const navigate = useNavigate()
    const { setUser, setSearchTerm, user } = useStore()

    function handleLogOut(e: any) {
        e.preventDefault();
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    }

    function submitSearch(inputValue: any) {
        setSearchTerm(inputValue);
    }
    
    function redirectToHome() {
        navigate("../home");
    }

    function redirectToProfile(user: any) {
        navigate(`../users/${user.id}`);
    }
    
    return (

        <>

            <header className="header">
                        
                <div className="header-group-1">

                    <Link to="/home">MovieLandia24</Link>
                    
                    <ul className="list-nav">

                        <li>Movies</li>
                        {/* <li>Series</li> */}
                        <li>Genres</li>
                        <li>Netflix</li>

                    </ul>

                </div>

                <div className="header-group-2">
                    
                    <div className="button-search">
                        <input type="search" name="q" placeholder="Search" aria-label="Search through site content"/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>

                    { user === null ? (

                            <button className="button-login-header" onClick={function () {
                              navigate("../login")
                            }}>
                                <i className="material-icons special-icon">account_circle</i>
                                
                                Sign In

                            </button>

                        ): (

                            <div className="dropdown">

                              <li
                                className="dropbtn"
                                onClick={function () {
                                  redirectToProfile(user);
                                }}
                              >

                                <img src={`http://localhost:4000/avatar/${user?.userName}`} />
                                {user.userName}
                                
                              </li>
                    
                              <div className="dropdown-content">

                                <button
                                  className="log-out"
                                  onClick={function (e) {
                                    handleLogOut(e);
                                  }}
                                >
                                  <span>Log Out</span>

                                </button>

                              </div>

                            </div>

                          )}

                </div>

            </header>

        </>

    )

}