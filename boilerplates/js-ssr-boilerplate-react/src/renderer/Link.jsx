import PropTypes from "prop-types";
import { usePageContext } from "./usePageContext";

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

const Link = (props) => {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return <a {...props} className={className} />;
};

export { Link };
