import React, { useState } from 'react'
import SignUp from '../sign_up';
import './Login.scss'

const Login = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='login container'>
            <div className="login-background">
                <div className="login-logo">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
                </div>
                <button onClick={() => setSignIn(true)} className='sign-in-button'>Sign In</button>
                <div className="login-gradient" />
            </div>
            <div className="login-content-wrapper">
                {signIn ? (<SignUp />) : (<><h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere, cancel at anytime</h2>
                    <h3>
                        Ready to watch? Enter you email to create or restart your
                        membership
            </h3>
                    <div className="login-input">
                        <form>
                            <input type='email' placeholder='Enter your email address' />
                            <button
                                onClick={() => setSignIn(true)}
                                className='login-get-started'
                            >
                                GET STARTED
                </button>
                        </form>
                    </div></>)}

            </div>
        </div >
    )
}

export default Login
