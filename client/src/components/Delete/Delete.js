import React from 'react';
import axios from 'axios';
import '../Delete/Delete.css'

const Delete = ({ id, loadReservation }) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/delete', { "resId": id }).then((response) => {
      loadReservation()
    })
  };
  return (
    <div>
      <button className="del-btn" onClick={deleteHandler} href='#'>Delete</button>
    </div>
  )
};
export default Delete;