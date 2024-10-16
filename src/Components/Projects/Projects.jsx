import SectionHeading from "../SectionHeading";
import Minesweeper from "./Minesweeper";
import NCGames from "./NCGames";
import './Projects.css'

function Projects() {
    return (
        <div className="projects-container" id="projects">
            <div className="projects-content">
                <SectionHeading title={"Projects"} />
                <p className="projects-intro">
                    Explore some of these projects which showcase my skills as a
                    software developer. As I continue to learn, I’ll add more
                    projects showcasing more skills.
                </p>
                <NCGames />
                <Minesweeper />
            </div>
        </div>
    );
}
export default Projects