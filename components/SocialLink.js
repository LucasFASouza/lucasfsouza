import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function SocialLink({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={icon}
        className="text-stone-400 hover:text-accent-pink"
        size="2x"
      />
    </a>
  );
}

export default SocialLink;
