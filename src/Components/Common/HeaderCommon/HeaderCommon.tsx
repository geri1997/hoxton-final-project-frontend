import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../../Zustand/store";
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import 'react-dropdown/style.css';
import "./HeaderCommon.css"

export default function HeaderCommon(this: any) {
    
    const navigate = useNavigate()
    const { setUser, setSearchTerm, user, genres, setGenres } = useStore()

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

     // #region "DropDown stuff"
     const [selectedOption, setSelectedOption] = useState(null);

     function getGenresFromServer(): void {

      fetch(`http://localhost:4000/genres`)
      .then(resp => resp.json())
      .then(genresFromServer => setGenres(genresFromServer))

    }

    useEffect(getGenresFromServer, [])

     const options: any = []

     for (const genre of genres) {
         options.push({value: genre.name, label: genre.name})
     }
 
    //  const defaultOption: any = options[0]
    
     // #endregion
    
    return (

        <>

            <header className="header">
                        
                <div className="header-group-1">

                    <Link to="/home">MovieLandia24</Link>
                    
                    <ul className="list-nav">

                        <div className="div-inside-li">
                            <img src="/assets/logos/ico_filma_blu.png" alt="" />
                            <li>Movies</li>
                        </div>

                        <div className="div-inside-li">
                            <img src="/assets/logos/list_blu.png" alt="" />
                            <li>Genres</li>
                        </div>

                        {/* <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            className="select-genres"
                        /> */}
                        
                        <div className="div-inside-li">
                            <img src="/assets/logos/netflix-red.png" alt="" />
                            <li>Netflix</li>
                        </div>

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