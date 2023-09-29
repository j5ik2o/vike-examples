import { jsx as _jsx } from "react/jsx-runtime";
import { usePageContext } from "./usePageContext";
const Link = (props) => {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return _jsx("a", { ...props, className: className });
};
export { Link };
