import Github from "../../assets/Icons/Github"

function NCGames() {
    return (
        <div className="project-card-container">
            <h3 className="project-card-title">Board Game Reviews site</h3>
            <div className="project-card">
                <div className="project-details">
                    <p>
                        My board game review website, where board game fans can
                        discuss the latest releases. Inspired by reddit this app
                        is designed to create a sense of community.
                    </p>
                    <h4>Features:</h4>
                    <ul className="project-features">
                        <li>
                            Upvote and downvote system allowing users to rate
                            reviews and comments left on reviews
                        </li>
                        <li>
                            Reviews can be sorted by likes, comments or time
                            created at
                        </li>
                        <li>Utilises Firebase for secure authentication</li>
                        <li>
                            Users can share their oppinons by posting reviews
                        </li>
                        <li>
                            Allows for games from a number of different
                            categories
                        </li>
                        <li>
                            Can view the profile of other users to see their
                            recent activity on the site
                        </li>
                    </ul>
                </div>
                <div className="project-demo">
                    <iframe
                        className="project-video"
                        src="https://www.youtube.com/embed/ZXPOCEuV2b4?si=sW7sAqj7sj2cXxRJ"
                    ></iframe>
                    <ul className="project-demo-buttons">
                        <li className="link-button accent">
                            <a
                                className="demo-link"
                                href="https://nc-games-mw.netlify.app"
                                target="blank"
                            >
                                Live Demo
                            </a>
                        </li>
                        <li className="project-github">
                            <a
                                target="blank"
                                href="https://github.com/Masonward99/FE_nc_games"
                            >
                                <Github />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="project-tags">
                <li>Full-stack</li>
                <li>React</li>
                <li>ExpressJS</li>
                <li>Javascript</li>
                <li>PostgreSQL</li>
            </ul>
        </div>
    );
}
export default NCGames