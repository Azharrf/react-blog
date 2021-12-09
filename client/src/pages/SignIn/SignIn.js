import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './SignIn.css';

export default function SignIn() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

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


    return (
        <div className="signin">
            <span className="signinTitle">signin</span>
            <form className="signinForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="signinInput"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="signinInput"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button className="signinLogin" type="submit" disabled={isFetching}>
                    SignIn
                </button>
            </form>
            <button className="signinRegis">
                <Link className="link" to="/register">
                    SignUp
                </Link>
            </button>
        </div>
    );
}
