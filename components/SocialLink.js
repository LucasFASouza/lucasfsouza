import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLink({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={icon}
        className="text-stone-400 hover:text-accent-pink transition-colors duration-200"
        size="2x"
      />
    </a>
  );
}

export default SocialLink;
