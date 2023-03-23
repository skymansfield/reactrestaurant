import React from 'react'
import '../Footer/Footer.css'
import twitter from '../../assets/images/twitter.jpg'
import instagram from '../../assets/images/instagram.jpg'
import facebook from '../../assets/images/fb2.png'

const Footer = () => {
  return (
    <footer className='footer-bg'>
      <h4 id='footer'>Pisan's Restaurant</h4>     
      <h5 className='address'>123 W. 35th St. </h5>
      <h5 className='address'>Phoenix AZ 80000</h5>
      <a href='#'><img src={twitter} alt='twitter' id='twitter'/></a>
      <a href='#'><img src={facebook} alt='facebook' id='facebook'/></a>
      <a href='#'><img src={instagram} alt='instagram' id='instagram'/></a>     
    </footer>
  )
};
export default Footer;