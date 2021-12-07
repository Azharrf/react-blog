import { useEffect, useState } from 'react';
import axios from "axios"
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCat = async () => {
            const res = await axios.get("/categories");
            setCategories(res.data);
        }
        fetchCat();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam explicabo reprehenderit odit praesentium repellat quas labore omnis vitae earum sunt!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {categories.map(cat => (
                        <Link to={`/?cat=${cat.name}`} key={cat._id}>
                            <li className="sidebarListItem">{cat.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
