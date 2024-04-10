import React, { useState } from 'react'
import './LoginPage.css';
import { assets } from '../../assets/assets';

export default function LoginPage({ setShowLogin }) {
    const [currentState, setCurrentState] = useState("Sign Up");
    return (
        <div className='login-page'>
            <form className="login-page-container">
                <div className="login-page-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                {currentState === "Sign Up" ? <div className="login-page-inputs">
                    <input type="text" placeholder='Your Name' required /> <input type="number" placeholder='Mobile Number' required />
                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='Password' required />
                </div> : <div className="login-page-inputs">
                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='Password' required />
                </div>}
                <button>{currentState === "Sign Up" ? "Create Account" : "Sign In"}</button>
                <div className="login-page-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree that I will eat only healthy food bahahahahaa.</p>
                </div>
                {currentState === "Login" ?
                    <p>Create a new account ?  <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> :
                    <p>Already have an account ?  <span onClick={() => setCurrentState("Login")}>Login Here</span></p>}

            </form>
        </div>
    )
}
