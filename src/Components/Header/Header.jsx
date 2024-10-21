import Email from '../../assets/Icons/Email';
import Github from '../../assets/Icons/Github';
import Linkedin from '../../assets/Icons/Linkedin';
import developer from '../../assets/developer-no-bg.png'
import Nav from '../Nav/Nav';
import './Header.css'
import cv from '../../assets/Mason-ward-cv.pdf'
function Header() {
    return (
        <div className="header-container">
            <div className="page-container">
                <Nav />
                <div className="header-content" id="about">
                    <div className="header-about-section">
                        <h1 className="header-title">
                            Hi, I&apos;m Mason Ward
                        </h1>
                        <h2 className="header-subtitle">Junior Developer</h2>
                        <p className="header-text">
                            From the moment I wrote my first line of code, I
                            knew I had found my passion. The thrill of solving
                            complex problems and the excitement of learning new
                            tools to tackle future challenges sparked a deep
                            interest in me. This drive led me to take the next
                            step and enrol in a coding bootcamp, solidifying my
                            decision to pursue a career in software engineering.
                            After completing this bootcamp I enrolled part-time
                            at The Open University to deepen my knowledge.
                        </p>
                        <ul className="header-links">
                            <li>
                                <a
                                    href="https://github.com/Masonward99"
                                    target="blank"
                                    name="github"
                                >
                                    <Github />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto: masonward99@hotmail.com"
                                    target="blank"
                                    name="email"
                                >
                                    <Email />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/mason-ward-177475170/"
                                    target="blank"
                                    name="linkedin"
                                >
                                    <Linkedin />
                                </a>
                            </li>
                        </ul>
                        <ul className="header-buttons">
                            <li className="link-button">
                                <a href={cv} download={cv} target="blank">
                                    CV
                                </a>
                            </li>
                            <li className="link-button accent">
                                <a href="#projects">See my work</a>
                            </li>
                        </ul>
                    </div>
                    <img
                        src={developer}
                        className="header-image"
                        alt="Image of developer working"
                    />
                </div>
            </div>
        </div>
    );
}
export default Header