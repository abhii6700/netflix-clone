import React, { useRef } from 'react'
import { auth } from '../../../firebase'
import './SignUp.scss'

const SignUp = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }

        ).catch((error) => {
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }

        ).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className='signup container'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button type='submit' onClick={signIn}>
                    Sign in
        </button>
                <h4>
                    <span className='signup-gray'>New to Netflix?</span>
                    <span className='signup-link' onClick={register}>
                        Sign up now
          </span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp
