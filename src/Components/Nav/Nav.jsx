import { useRef } from 'react';
import Email from '../../assets/Icons/Email'
import Hamburger from '../../assets/Icons/Hamburger';
import Phone from '../../assets/Icons/Phone'
import './Nav.css'
import Close from '../../assets/Icons/Close';
function Nav() {
    let sidebar = useRef(null)
    function toggleSidebar(event) {
        event.preventDefault()
        if (sidebar.current.style.display === 'none' ||
            sidebar.current.style.display === ''
        ) {
            sidebar.current.style.display = 'block'
        } else {
            sidebar.current.style.display = 'none'
        }

    }
    return (
      <>
        <ul className="navbar">
            <li>
                <h3 className="nav-name">Mason Ward</h3>
            </li>
            <li className="navbar-right hide-on-mobile">
                <ul className="navbar-contact">
                <li className="contact-nav-item">
                    <Phone /> 07459 625 984
                </li>
                <li className="contact-nav-item">
                    <Email /> Masonward99@hotmail.com
                </li>
                </ul>
                <ul className="navbar-links">
                    <li className="navbar-link ">About</li>
                    <li className="navbar-link"><a href='#skills'>Skills</a></li>
                    <li className="navbar-link"><a href='#projects'>Projects</a></li>
                    <li className="navbar-link small-accent"><a href='#contact'>Contact</a></li>
                </ul>
            </li>
            <li className='hide-on-desktop'><button className='navbar-button' onClick={toggleSidebar}><Hamburger/></button></li>
        </ul>
        <ul className="sidebar" ref={sidebar}>
            <li className='sidebar-link'><button onClick={toggleSidebar} className='navbar-button close-button'><Close/></button></li>
            <li className="sidebar-link">About</li>
            <li className="sidebar-link"><a href='#skills'>Skills</a></li>
            <li className="sidebar-link"><a href='#projects'>Projects</a></li>
            <li className="sidebar-link"><a href='#contact'>Contact</a></li>
        </ul>
      </>
    );
}
export default Nav