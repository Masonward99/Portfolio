import Email from '../../assets/Icons/Email'
import Phone from '../../assets/Icons/Phone'
import './Nav.css'
function Nav() {
    return (
        <ul className="navbar">
            <li><h3 className='nav-name'>Mason Ward</h3></li>
            <li className='navbar-right'>
                <ul className='navbar-contact'>
                    <li className='contact-nav-item'><Phone/> 07459625984</li>
                    <li className='contact-nav-item'><Email/> Masonward99@hotmail.com</li>
                </ul>
                <ul className='navbar-links'>
                    <li className='navbar-link'>About</li>
                    <li className='navbar-link'>Skills</li>
                    <li className='navbar-link'>Projects</li>
                    <li className='navbar-link small-accent'>Contact</li>
                </ul>
            </li>
        </ul>
    )
}
export default Nav