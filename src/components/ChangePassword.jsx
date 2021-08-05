import React,{useState} from 'react'
import './css/Login.css'

const ChangePassword = () => {

    const [input, setInput] = useState({
        password1:"",
        password2:""
    });

    let name, value;
    const handleInput=(e)=>{
        name = e.target.name;
        value = e.target.value;

        setInput({...input,[name]:value});
    }

    function handlePasswordChange(e){
        e.preventDefault();

        //code
    }


    return (
        <form className='loginForm' onSubmit={(e)=>handlePasswordChange(e)}>
                <h4>Change Password</h4>
                <input name='password1' type="password" placeholder='Password' onChange={handleInput} required/>
                <input name='password2' type="password" placeholder='Confirm Password' onChange={handleInput} required/>
                <button type='submit'>Change</button>
        </form>
    )
}

export default ChangePassword
