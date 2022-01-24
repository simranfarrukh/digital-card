import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className="Footer">
            <a
                className="Footer-icon"
                href="https://www.instagram.com/dunyazatde/"
                type="button"
            >
                <FontAwesomeIcon icon={["fab", "instagram-square"]} size="2x"/>
            </a>
            <a
                className="Footer-icon"
                href="https://github.com/simranfarrukh"
                type="button"
            >
                <FontAwesomeIcon icon={["fab", "github-square"]} size="2x"/>
            </a>
            <a
                className="Footer-icon"
                href="https://twitter.com/dunyazatde"
                type="button"
            >
                <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x"/>
            </a>

        </div>
    );
}

export default Footer;
