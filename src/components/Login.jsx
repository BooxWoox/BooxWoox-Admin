import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './css/Login.css'

const Login = () => {
    const history = useHistory();

    const [input, setInput] = useState({
        username: "",
        password: ""
    });

    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setInput({ ...input, [name]: value });
    }


    async function handleLogin(e) {
        e.preventDefault();


        try {
            const res = await axios.post('https://tgc45m62ij.execute-api.ap-south-1.amazonaws.com/Prod/user/login', input, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                }
            });

            const token = await res.data.authToken;
            sessionStorage.setItem('token', token);

            if(token!=null){
                history.push('/bookApproval');
            }


        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form className='loginForm' onSubmit={(e) => handleLogin(e)}>
            <h4>Login</h4>
            <input name='username' type="email" placeholder='E-mail' onChange={handleInput} required />
            <input name='password' type="password" placeholder='Password' onChange={handleInput} required />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login
