import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
    const user = true;

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
                    <li className="topList-item">
                        { user && <Link to="/signin">Logout</Link> }
                    </li>
                </ul>
            </div>
            <div className="topRight">
                { user ? (
                    <img className="topImg" src="https://images.pexels.com/photos/8727669/pexels-photo-8727669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="User"/>
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
