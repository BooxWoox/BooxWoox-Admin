import axios from 'axios';
import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import './css/Login.css'

const Login = () => {
    // const history = useHistory();

    const [input, setInput] = useState({
        email: "",
        password: "",
        type: "admin"
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
            const res = await axios.post('https://5fckdyqh3c.execute-api.ap-south-1.amazonaws.com/Prod/admincourierlogin', input, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json'
                }
            });

            console.log(res);

        } catch (error) {
            console.log(error);
        }

        // history.push('/changePassword');
    }
    
    return (
        <form className='loginForm' onSubmit={(e) => handleLogin(e)}>
            <h4>Login</h4>
            <input name='email' type="email" placeholder='E-mail' onChange={handleInput} required />
            <input name='password' type="password" placeholder='Password' onChange={handleInput} required />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login
