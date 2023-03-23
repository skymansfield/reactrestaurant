import React from 'react';
import '../Form/Form.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Form = ({ info, setInfo, getReservation }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault()
    const name = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [name]: value
    });
  }
  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/reservation', info).then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate(response.data.redirectUrl);
      getReservation()
      alert('Your reservation has been made!')
    })
  };

  return (
    <div id='contact-div'>
      <h1 id='contact-title'>Contact</h1>
      <h2 id='contact-section'>Find us at some address at some place or call us at 05050515-122330
FYI! We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</h2>
      <br />
      <hr className='hr' />
      <h2 id='reserve'>Schedule a Reservation:</h2>
      <form>
        <div className="mb-3 mt-3">
          <input type="text" className="form-control" id="name" placeholder="Name" name="name" onChange={handleChange} value={info.name} required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="guests" placeholder="Guests" name="guests" onChange={handleChange} value={info.guests} required />
        </div>
        <div className="mb-3">
          <input type="date" name="date" className="form-control" id="datetime" onChange={handleChange} value={info.date} required />
        </div>
        <div className="mb-3">
          <input type="time" name="time" className="form-control" id="datetime" onChange={handleChange} value={info.time} required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="message" placeholder="Message" name="message" onChange={handleChange} value={info.message} required />
        </div>
        <button type="submit" className="btn" id='sub' onClick={submitHandler}>Submit</button>
      </form>
    </div>
  )
};
export default Form;