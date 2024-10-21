import Github from "../../assets/Icons/Github";
import tetris from '../../assets/tetris.png'
function Tetris() {
    return (
        <div className="project-card-container">
            <h3 className="project-card-title">Tetris</h3>
            <div className="project-card">
                <div className="project-details">
                    <p>
                        My recreation of the classic puzzle game Tetris, created
                        using HTML, CSS and JavaScript. The goal of the game is
                        to prevent the stack of shapes from reaching the top of
                        the screen.
                    </p>
                    <h4>Features:</h4>
                    <ul className="project-features">
                        <li>9 different difficulty levels</li>
                        <li>
                            Players score points for every space a block drops
                            and for number of lines cleared
                        </li>
                        <li>Game can be paused at any time by pressing P</li>
                        <li>Users control the game by using the arrow keys</li>
                        <li>
                            Includes a shadow showing where the piece would drop
                            if the hard drop key is pressed
                        </li>
                        <li>
                            The next shape is displayed allowing the user to
                            prepare for it
                        </li>
                    </ul>
                </div>
                <div className="project-demo">
                    <img className="project-video" src={tetris} />
                    <ul className="project-demo-buttons">
                        <li className="link-button accent">
                            <a
                                className="demo-link"
                                href="https://tetris-mw.netlify.app"
                                target="blank"
                            >
                                Live Demo
                            </a>
                        </li>
                        <li className="project-github">
                            <a
                                target="blank"
                                href="https://github.com/Masonward99/tetris"
                            >
                                <Github />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="project-tags">
                <li>Front-End</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
            </ul>
        </div>
    );
}
export default Tetris