import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import farmerContext from "../../context/farmer/farmerContext";

const Header = () => {
    const FarmerContext = useContext(farmerContext);
    const { logout, userInfo} = FarmerContext;
    console.log(userInfo);

    const logoutHandler = () => {
        logout();
      };
    return(
        <header className="main-header-top hidden-print">
            <Link to="/farmer" className="logo"><img className="img-fluid able-logo" src="/assets/images/logo.png" alt="Theme-logo"></img></Link>
            <nav className="navbar navbar-static-top">                
                <ul className="top-nav lft-nav">
                </ul>
                <div className="navbar-custom-menu f-right">
                    <ul className="top-nav">
                    {userInfo ? (
                        <li className="dropdown">
                            <a href="#!" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
                               className="dropdown-toggle drop icon-circle drop-image">
                                <span><img className="img-circle avatar" src="assets/images/avatar-1.png"
                                        alt="user"></img></span>
                                <span>John <b>Doe</b> <i className=" icofont icofont-simple-down"></i></span>
                            </a>
                            <ul className="dropdown-menu settings-menu">
                                <li><a href="#!"><i className="icon-settings"></i> Settings</a></li>
                                <li><a href="#!"><i className="icon-user"></i> Profile</a></li>
                                <li><a href="#!"><i className="icon-envelope-open"></i> My Messages</a></li>
                                <li className="p-0">
                                    <div className="dropdown-divider m-0"></div>
                                </li>
                                <li onClick={logoutHandler}><i className="icon-logout"></i> Logout</li>
                            </ul>
                        </li>
                    ):(
                        <li><Link to="/login"><i className="icon-logout"></i> Log in</Link></li>
                    )}
                    </ul>
                </div>
            </nav>
        </header>
    )
};


export default Header;