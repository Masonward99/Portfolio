import Email from '../../assets/Icons/Email';
import Github from '../../assets/Icons/Github';
import Linkedin from '../../assets/Icons/Linkedin';
import developer from '../../assets/developer-no-bg.png'
import Nav from '../Nav/Nav';
import './Header.css'
import cv from '../../assets/Mason-Ward-CV.pdf'
function Header() {
    return (
        <div className="header-container">
            <div className='page-container'>
                <Nav/>
                <div className='header-content'>
                    <div className="header-about-section">
                        <h1 className='header-title'>Mason Ward</h1>
                        <h2 className='header-subtitle'>Junior Developer</h2>
                        <p className='header-text'>
                            Earlier this year I was looking for a new career, after a
                            recommendation from a friend I decided that a career in tech would
                            be right for me. As soon as I started working on the practice
                            materials for the Northcoders course I was hooked, I loved solving
                            the problems that were provided, as I was learning new things, I was
                            refactoring my code to incorporate these new methods. I enjoyed it
                            so much I decided to join the march bootcamp instead of waiting
                            until after university to join the may cohort.
                        </p>
                        <ul className="header-links">
                            <li><a href="https://github.com/Masonward99" target='blank'>
                                <Github />
                            </a></li>
                            <li><a href="mailto: masonward99@hotmail.com" target='blank'>
                                    <Email />
                            </a></li>
                            <li><a href="https://www.linkedin.com/in/mason-ward-177475170/" target='blank'>
                                    <Linkedin />
                            </a></li>
                        </ul>
                        <ul className="header-buttons">
                            <li className='link-button'><a href={cv} download={cv} target='blank'>CV</a></li>
                            <li className='link-button accent'><a>See my work</a></li>
                        </ul>
                    </div>
                    <img src={developer} className='header-image'/>
                </div>
            </div>
        </div>
    );
}
export default Header