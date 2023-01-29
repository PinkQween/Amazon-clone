import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then((auth) => {
            console.log(auth)

            if (auth) {
                navigate('/')
            }
        }).catch(err => alert(err.message))
    }

    const register = e => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
            console.log(auth)

            if (auth) {
                navigate('/')
            }
        }).catch(err => alert(err.message))
    }

    return (
        <Container>
            <Wrap>
                <Link to='/'>
                    <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
                </Link>

                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <LoginButton type='submit' onClick={signIn} >Sign In</LoginButton>
                </form>

                <Notice>
                    By signing-in you agree to the Amazon's Conditions of Use and Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </Notice>

                <RegisterButton onClick={register}>Create your Amazon Account</RegisterButton>
            </Wrap>
        </Container>
    )
}

export default Login

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 65px);
`

const Wrap = styled.div`
    width: 400px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
    margin-top: 15%;

    h1 {
        font-weight: 500;
        margin-bottom: 0;
        align-items: center;
        display: flex;
        text-align: center;
        justify-content: center;
    }

    p {
        margin-top: 15px;
        font-size: 12px;
    }

    form {
        h5 {
            margin-bottom: 5px;
        }

        input {
            height: 30px;
            margin-bottom: 5px;
            background-color: white;
            width: 98%;
        }
    }
`

const Logo = styled.img`
    margin-top: 20px;
    margin-bottom: 0;
    /* object-fit: contain; */
    width: 140px;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    display: flex;
    justify-content: center;
    align-self: center;
    
`

const LoginButton = styled.button`
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    border-radius: 12px;
    
    &:hover {
        background: #cca33d;
    }

    &:active {
        background: #a3822f;
    }
`

const RegisterButton = styled.button`
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #888888;
    border-radius: 12px;
    background-color: #ededed;
    
    &:hover {
        background-color: #cccccc;
    }

    &:active {
        background: #aaaaaa;
    }
`

const Notice = styled.p`
    text-align: center;
`