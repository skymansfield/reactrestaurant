import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import '../Login/Login.css'
import logo from '../../../assets/images/drawing12.png'

const Login = ({ userInfo, setUserInfo, setInfo }) => {
  // navigate redirects the data to the location of the redirectUrl in the controllers
  const navigate = useNavigate();
  // handlechange updates state based on the user input in the form
  const handleChange = (e) => {
    // preventDefault is to block a default event from happening until the user interacts with the UI or interface
    e.preventDefault();
    // selects the name/ value from the elements where handleChange is used
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  };
  const submitHandler = (e) => {
    // submitHandler is the action that will happen when a button/a is clicked
    // because its being used on a submit button element
    e.preventDefault();
    // axios is a shorthanded way to send an XMLHttp request
    axios.post('http://localhost:8080/login', userInfo).then((response) => {
      if (response.data.success) {
        // localStorage is a way to store cached info pertaining to a specific user for your site in their browser
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setInfo(response.data)
        navigate(response.data.redirectUrl, response.data)
      } else {
        alert('Invalid Password!')
      }
    })
  };
  return (
    <div id='login-bg'>
      <h1 id='make'>Reservations</h1>
      <form id='padding'>
        <h2 id='login-title'>Login</h2>
        <input type='text' placeholder='Username' name='username' id='user-login' className='input' onChange={handleChange} />
        <br />
        <input type="password" placeholder="Password" name="password" id='user-psw' className='input' onChange={handleChange} />
        <br />
        <button type="submit" id="login" onClick={submitHandler}>Login</button>
        <br />
        <a href='/register' id='signup-link'>Create Account</a>
      </form>
      <div id='logo-bg'></div>
      <img src={logo} alt='logo' id='logo'/>
      
    </div>
  )
};
export default Login;