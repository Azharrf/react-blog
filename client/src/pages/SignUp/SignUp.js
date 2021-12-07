import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import './SignUp.css'

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            });
            res.data && window.location.replace("/signin");
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="signup">
            <span className="signupTitle">Sign Up</span>
            <form className="signupForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Jhon Doe" 
                    className="signupInput" 
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input 
                    type="text" 
                    placeholder="user@example.com" 
                    className="signupInput" 
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="+8 Character, 1 Capital Letter" 
                    className="signupInput" 
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="signupRegis" type="submit">Sign Up</button>
            </form>
            <button className="signupLogin">
                <Link to="/signin">Sign In</Link>
            </button>

            {error && alert("Something went wrong!")}
        </div>
    )
}
