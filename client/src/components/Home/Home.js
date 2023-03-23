import React, { useState, useEffect } from 'react'
import Form from '../Form/Form'
import NavBar from '../NavBar/NavBar';
import axios from 'axios'
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Footer from '../Footer/Footer';

const Home = ({ info, setInfo }) => {
  const [newReservation, setNewReservation] = useState([])
  // should use async when you want your page to run normally while still taking other actions/info
  const getReservation = async () => {
    try {
      const response = await axios.get('http://localhost:8080/reservation');
      setNewReservation(response.data)
      setInfo({
        name: "",
        guests: "",
        date: "",
        time: "",
        message: ""
      })
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReservation();
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <Menu />
      <About />
      <Form info={info} setInfo={setInfo} getReservation={getReservation} newReservation={newReservation}/>
      <Footer />
    </div>
  )
};
export default Home;