import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Topbar.css';

const Topbar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topList-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="topList-item">
                        <Link to="/">About</Link>
                    </li>
                    <li className="topList-item">
                        <Link to="/">Contact</Link>
                    </li>
                    <li className="topList-item">
                        <Link to="/write">Write</Link>
                    </li>
                    <li className="topList-item" onClick={handleLogout}>{ user && "Logout" }</li>
                </ul>
            </div>
            <div className="topRight">
                { user ? (
                    <Link to="/settings">
                        <img className="topImg" src={PF + user.profilePic} alt="User"/>  
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topList-item">
                            <Link to="/signin">SignIn</Link>
                        </li>
                        <li className="topList-item">
                            <Link to="/signup">SignUp</Link>
                        </li>
                    </ul>
                ) }
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
