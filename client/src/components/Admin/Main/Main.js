import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Delete from '../../Delete/Delete';

import '../Main/Main.css'

const Main = ({ info, setInfo }) => {
  // this is setting values to be used in the setState
  // react hooks
  const [res, setRes] = useState([])
  const loadReservation = () => {
    axios.get('http://localhost:8080/reservation').then((response) => {
      setRes(response.data)
     })
  };
// useEffect replaces componentDidMount and other lifecycle methods for functional components
// cannot be used in a class component
  useEffect(() => {
    loadReservation()
  }, [])
// [] is to keep an infinite loop (sometimes lol)
  const username = JSON.parse(localStorage.getItem('user')).username;
  return (
    <div id='admin-bg'>
      <h1 id='user-name' className='text-capitalize' >Welcome {username}!</h1>
      <table className="container table" id='tab-border'>
        <thead id='bot-bor'>
          <tr>
            <th scope="col" id='num'>#</th>
            <th scope="col" id='num'>Guest Name</th>
            <th scope="col" id='num'>Party Size</th>
            <th scope="col" id='num'>Notes</th>
            <th scope="col" id='num'>Time</th>
            <th scope="col" id='num'>Date</th>
            <th scope="col" id='num'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {res !== {} ? res.map(({ date, guests, message, name, time, _id }, i) => {
            let date1 = date.match(/\d{4}-\d{2}-\d{1,}/)
            res.sort((a, b) => a.date > b.date ? 1 : -1)
            return (
              <>
                <tr>
                  <th scope="row">{i++ + 1}</th>
                  <td className='text-capitalize'>{name}</td>
                  <td>{guests}</td>
                  <td>{message}</td>
                  <td>{time}</td>
                  <td>{date1}</td>
                  <td><Delete info={info} setInfo={setInfo}id={_id}loadReservation={loadReservation} /></td>
                </tr>
              </>
            )
          }) : console.log("no reservations")}
        </tbody>
      </table>

    </div>
  )
};
export default Main;