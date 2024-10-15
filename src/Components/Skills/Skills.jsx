import Css from "../../assets/Skills/Css"
import Express from "../../assets/Skills/Express"
import Firebase from "../../assets/Skills/Firebase"
import Git from "../../assets/Skills/Git"
import Html from "../../assets/Skills/Html"
import Java from "../../assets/Skills/Java"
import Javascript from "../../assets/Skills/Javascript"
import Jest from "../../assets/Skills/Jest"
import NodeJs from "../../assets/Skills/NodeJS"
import Postgres from "../../assets/Skills/Postgres"
import Postman from "../../assets/Skills/Postman"
import Python from "../../assets/Skills/Python"
import React from "../../assets/Skills/React"
import ReactNative from "../../assets/Skills/ReactNative"
import VSCode from "../../assets/Skills/VSCode"
import './Skills.css'

function Skills() {
    return (
        <div className="skills-content">
            <h2>Technologies and skills</h2>
            <p>These are the skills that I have developed</p>
            <ul className="skills-showcase">
                <li className="skill-item"><Css /><p>CSS</p></li>
                <li className="skill-item"><Html /><p>HTML</p></li>
                <li className="skill-item"><Java /><p>Java</p></li>
                <li className="skill-item"><Javascript /><p>JavaScript</p></li>
                <li className="skill-item"><NodeJs /><p>NodeJS</p></li>
                <li className="skill-item"><Python /><p>Python</p></li>
                <li className="skill-item"><Postman /><p>Postman</p></li>
                <li className="skill-item"><Express /><p>Express</p></li>
                <li className="skill-item"><React /><p>React</p></li>
                <li className="skill-item small-text"><VSCode /><p>Visual Studio</p></li>
                <li className="skill-item"><Postgres /><p>PostgreSQL</p></li>
                <li className="skill-item"><Firebase /><p>Firebase</p></li>
                <li className="skill-item"><Git /><p>Git</p></li>
                <li className="skill-item"><Jest /><p>Jest</p></li>
                <li className="skill-item small-text"><ReactNative/><p>React Native</p></li>
            </ul>
        </div>
    )
}
export default Skills