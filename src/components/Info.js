// email button && linkedin button
import ProfilePhoto from "../images/profile-pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Info() {
    return (
        <header className="Info-header">
            <img src={ProfilePhoto} alt="profile"/>
            <h1 className="Info-name">Simran Farrukh</h1>
            <h2 className="Info-role">Frontend Developer</h2>
            <a className="Info-website" href="https://simranfarrukh.com"
            >simranfarrukh.com
            </a>
            <div className="Info-buttons">
                <a
                    className="Info-mailto"
                    href="mailto:farrukhsimran@gmail.com"
                    type="button"
                >
                    <FontAwesomeIcon icon="envelope" /> Email
                </a>
                <a
                    className="Info-linkedin"
                    href="https://ca.linkedin.com/in/simran-farrukh-56b885178"
                    type="button"
                >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} /> LinkedIn
                </a>
            </div>
        </header>
    );
}

export default Info;