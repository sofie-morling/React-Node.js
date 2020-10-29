import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { signin } from '../actions/userAction';


function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSignin);
    const { loding, userInfo, error } = userSignin;
    const dispatch = useDispatch();

 

    useEffect (() => {
        if (userInfo) {
            props.history.push("/");
        }
        
        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h1>Sign In</h1>
                </li>
                <li>
                    {loding && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}
                    />
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}
                    />
                </li>
                <li>
                    <button type="submit" className="button primary">Signin</button>

                </li>
                <li>
                    New to Coctail site?
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center">Create your login Account</Link>
                </li>
            </ul>
        </form>
    </div>
}
export default SigninScreen;