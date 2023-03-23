import Home from "./components/Home/Home";
import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Admin/Login/Login'
import Register from './components/Admin/Register/Register'
import Main from './components/Admin/Main/Main'
import './App.css'
const App = () => {
// these are declared here to be able to use inside any children components
  const [info, setInfo] = useState({
    name: "",
    guests: "",
    date: "",
    time: "",
    message: ""
  });
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    confirm: ''
  });
  // const []
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home info={info} setInfo={setInfo} />} />
          <Route exact path='/login' element={<Login userInfo={userInfo} setUserInfo={setUserInfo} info={info} setInfo={setInfo} />} />
          <Route exact path='/register' element={<Register userInfo={userInfo} setUserInfo={setUserInfo} />} />
          <Route exact path='/main' element={<Main userInfo={userInfo} setUserInfo={setUserInfo} info={info} setInfo={setInfo} />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
