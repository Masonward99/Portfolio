import Github from "../../assets/Icons/Github";
import minesweeper from '../../assets/minesweeper.png'
function Minesweeper() {
    return (
        <div className="project-card-container">
            <h3 className="project-card-title">Minesweeper</h3>
            <div className="project-card">
                <div className="project-demo">
                    <img className="project-video" src={minesweeper}/>
                    <ul className="project-demo-buttons">
                        <li className="link-button accent">
                            <a
                                className="demo-link"
                                href="https://minesweeper-mw.netlify.app"
                                target="blank"
                            >
                                Live Demo
                            </a>
                        </li>
                        <li className="project-github">
                            <a
                                target="blank"
                                href="https://github.com/Masonward99/Minesweeper"
                            >
                                <Github />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="project-details">
                    <p>My recreation of the classic video game minesweeper using JavaScript.
                        The goal of the game is to clear a grid of mines without getting blown up!
                    </p>
                    <h4>Features:</h4>
                    <ul>
                        <li>Flag a mine using either right click or by toggling the flag button</li>
                        <li>Uses a timer to measure how long each attempt takes</li>
                        <li>Clicking on a cell surrounded by empty spaces will reveal all adjacent empty spaces</li>
                        <li>To make the game feel fairer the first cell revealed will not be a bomb</li>
                        <li>3 different difficulty levels</li>
                    </ul>
                </div>
            </div>
            <ul className="project-tags">
                <li>Frontend</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
        </div>
    );
}
export default Minesweeper