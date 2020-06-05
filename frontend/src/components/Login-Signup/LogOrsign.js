import React, { useState } from 'react'
import * as logFunc from './loginFunctions.js'
import './logOrsign.css'
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
export default function LogOrsign({ history }) {

    let [userData, setUserData] = useState({})

    const getToSignUp = e => {
        e.preventDefault()
        history.push('/register')
    }
    const handleChangeEvent = (e, title) => {
        let value = e.target.value
        setUserData({ ...userData, [title]: value })

    }

    const submitData = e => {
        e.preventDefault()
        // console.log(userData)
        logFunc.logUserIn(userData)
            .then(response => response.data)
            .then(data => {
                let { token } = data
                sessionStorage.setItem('authToken', token)
                history.push('/routes')
            })
    }



    return (
        <div className="container">
            <section className="myform-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="form-area login-form">
                                <div className="form-content">
                                    <h2>Login</h2>
                                    <p>you chose the right option</p>
                                    <ul>
                                        <li><a href="/#" className="facebook"><FaFacebookF /></a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="/#" className="twitter"><FaTwitterSquare /></a></li>
                                    </ul>
                                </div>
                                <div className="form-input">
                                    <h2>Enter Credentials</h2>
                                    <form onSubmit={(e) => { submitData(e) }}>
                                        <div class="form-group">
                                            <input className="loginInfo" type="email" name="name" required onChange={e => handleChangeEvent(e, 'email')} />
                                            <label>Email-Id</label>
                                        </div>
                                        <div class="form-group">
                                            <input className="loginInfo" type="password" name="password" required onChange={e => handleChangeEvent(e, 'password')} />
                                            <label>password</label>
                                        </div>
                                        <div class="myform-button">
                                            <button type="submit" className="myform-btn">Login</button>
                                        </div>
                                        <div>
                                            <small className="form-text text-muted signup-text">Already a User?
                                            </small>
                                            <span className="signUPtext"><a href="/#" onClick={(e) => getToSignUp(e)}>Sign-Up</a></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}
