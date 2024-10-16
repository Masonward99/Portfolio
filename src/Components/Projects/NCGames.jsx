import Github from "../../assets/Icons/Github"

function NCGames() {
    return (
      <div className="project-card-container">
        <h3 className="project-card-title">NC Games</h3>
        <div className="project-card">
          <div className="project-details">
            <p>
              NC Games is a board game review website that allows users to post
              reviews of board games, and comment on other users reviews. It
              builds on the [backend
              api](https://github.com/Masonward99/nc_games) that I created and
              also uses firebase to allow user authentication.
            </p>
            <h4>Features:</h4>
            <ul className="project-features">
              <li>Utilises Firebase for secure authentication</li>
            </ul>
          </div>
          <div className="project-demo">
            <iframe
              className="project-video"
              src="https://www.youtube.com/embed/J5FlI3ndrKw"
            ></iframe>
            <ul className="project-demo-buttons">
              <li className="link-button accent">
                <a className="demo-link" href="https://nc-games-mw.netlify.app" target="blank">
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