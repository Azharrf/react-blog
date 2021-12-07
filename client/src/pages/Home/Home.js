import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import axios from "axios"
import './Home.css'
import Header from '../../component/Header/Header'
import Posts from '../../component/Posts/Posts'
import Sidebar from '../../component/Sidebar/Sidebar'

export default function Home() {
    const [ posts, setPosts ] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/posts${search}`);
            setPosts(res.data);
        }
        fetchPost();
    }, [search]);

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}
