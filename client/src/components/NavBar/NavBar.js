import { React } from 'react'
import '../NavBar/NavBar.css'
import logo from '../../assets/images/drawing12.png'
const NavBar = () => {
    return (
        <div className='navbar fixed-top' id='nav'>
            <a className="nav-link" href="#header-img" id='link-home'>Home</a>
            <a className="nav-link" href="#time" id='link-menu'>Menu</a>
            <img src ={logo} alt='salad' id='salad'/>
            <a className="nav-link" href="#about-title" id='link-about'>About</a>
            <a className="nav-link" href="#footer" id='link-contact'>Contact</a>
            
        </div>
    )
};
export default NavBar