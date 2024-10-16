import SectionHeading from "../SectionHeading";
import NCGames from "./NCGames";
import './Projects.css'

function Projects() {
    return (
        <div className="projects-container" id='projects'>
            <div className="projects-content">
                <SectionHeading title={'Projects'} />
                <p>An intro to the projects section should take about 2 lines.</p>
                <NCGames/>
            </div>
        </div>
    )
}
export default Projects