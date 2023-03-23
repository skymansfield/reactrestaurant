import React from 'react'
import header from '../../assets/images/pexels-chan-walrus-958545.jpg'
import '../Header/Header.css'

const Header = () => {
  return (
    <div>
      <img src={header} alt='food' id='header-img' />
      <h2 id='title'>Pisan's <br/><p id='rest'>Restaurant</p></h2>
      <h2 id='time'>Open Daily from 10am to 10pm</h2>
    </div>
  )
};
export default Header;