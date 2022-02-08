import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SignInLink = styled.a`
    font-size: 14px;
    cursor: pointer;
    color: blue;
    &:hover{
        color: rgb(255, 153, 0);;
        border-bottom: 1px solid rgb(255, 153, 0);;
    }
`

function Register() {
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Create account</h1>

                <form>
                    <h5>Your name</h5>
                    <input type='text'/>

                    <h5>E-mail</h5>
                    <input type='text'/>

                    <h5>Password</h5>
                    <input placeholder="" type='password'/>

                    <h5>Re-enter password</h5>
                    <input type='password'/>

                    <button type='submit' className='login__signInButton'>Continue</button>
                </form>
                <p>Already have account? <Link to='/Login'><SignInLink>Sign in</SignInLink></Link></p>
            
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
            </div>
            <div className='footer'>
                    
            </div>
        </div>
    )
}

export default Register;