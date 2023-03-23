import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  };
  const submitHandler = (e) => {
    console.log("click");
    e.preventDefault();
    if (userInfo.password !== userInfo.confirm) {
      alert('The passwords do not match!')
    } else {
      axios.post('http://localhost:8080/signup', userInfo).then((response) => {
        if (response.data.success) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate(response.data.redirectUrl, userInfo)
        } else {
          console.log(response.data);
        }
      })
    }
  };
  return (
    <div id='login-bg'>
      <h1 id='make'>Reservations</h1>
      <form id='padding'>      
        <h2 id="emp-signup"><u>Sign Up</u></h2>
        <input type='text' name='username' placeholder='Username' onChange={handleChange} autoComplete='on' className='input' required />
        <br />
        <input type='password' name='password' placeholder="Password" onChange={handleChange} autoComplete='on' className='input' required />
        <br />
        <input type='password' name='confirm' placeholder='Password' onChange={handleChange} autoComplete='on' className='input' required />
        <br />
        <button type='submit' id="login" value='Sign Up'  onClick={submitHandler}>Submit</button>
        <br />
        <a href='/login' id='login-link'>Login</a>
      </form>
    </div>
  )
};
export default Register;