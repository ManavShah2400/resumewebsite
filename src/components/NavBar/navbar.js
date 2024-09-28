import React, { useState } from 'react';
import name from '../../assests/name.png';
import hamburgermenu from '../../assests/hamburger.png';
import comments from '../../assests/comment.png';
import { Link } from 'react-scroll';
import './navbar.css'


const Navbar = () => {
  const [showmenu, setshoemenu] = useState(false); 
  return (
    <nav className='navbar'>
        <img src={name} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem' activeClass='active' spy={true} to='Intro' smooth={true} duration={500} offset={-80}>Home</Link>
            <Link className='desktopMenuListItem' activeClass='active' spy={true} to='skill' smooth={true} duration={500} offset={-80}>About</Link>
            <Link className='desktopMenuListItem' activeClass='active' spy={true} to='Experience' smooth={true} duration={500} offset={-80}>Experience</Link>
            <Link className='desktopMenuListItem' activeClass='active' spy={true} to='Project' smooth={true} duration={500} offset={-80}>Project</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() =>{
          document.getElementById('contactmeSection').scrollIntoView({behavior: 'smooth' , activeClass: 'active'})
        }}>
            <img className='desktopMenuIcon' src={comments} alt='Contact me'/>Contact Me
            {/* <Link to='contactmeSection' smooth={true} duration={500} offset={-80}>Contact Me</Link> */}
        </button>
        <img src={hamburgermenu} alt='burgermenu' className='MobileMenu' onClick={() => setshoemenu(!showmenu)}/>
        <div className='navMenu' style={{display: showmenu? 'flex' : 'none'}}>
            <Link className='listItem' activeClass='active' spy={true} onClick={() => setshoemenu(false)} to='Intro' smooth={true} duration={500} offset={-80}>Home</Link>
            <Link className='listItem' activeClass='active' spy={true} onClick={() => setshoemenu(false)} to='skill' smooth={true} duration={500} offset={-80}>About</Link>
            <Link className='listItem' activeClass='active' spy={true} onClick={() => setshoemenu(false)} to='Experience' smooth={true} duration={500} offset={-80}>Experience</Link>
            <Link className='listItem' activeClass='active' spy={true} onClick={() => setshoemenu(false)} to='Project' smooth={true} duration={500} offset={-80}>Project</Link>
            <Link className='listItem' activeClass='active' spy={true} onClick={() => setshoemenu(false)} to='contactmeSection' smooth={true} duration={500} offset={-80}>Contact Me</Link>
        </div>
    </nav>
  )
}

export default Navbar