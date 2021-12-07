import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './SignIn.css';

export default function SignIn() {
    const userRef = useRef();
    const passwordRef = useRef()
    const { user, dispatch } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/signin", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    console.log(user)

    return (
        <div className="signin">
            <span className="signinTitle">Sign In</span>
            <form className="signinForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Jhondoe" 
                    className="signinInput"
                    ref={ userRef }
                />
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    className="signinInput"
                    ref={ passwordRef }
                />
                <button className="signinLogin" type="submit">Sign In</button>
            </form>
            <button className="signinRegis">
                <Link to="/signup">Sign Up</Link>
            </button>
        </div>
    )
}
