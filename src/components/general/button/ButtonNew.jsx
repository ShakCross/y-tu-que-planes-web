import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Button = ({ children, className, url, action, click, href, to }) => {
  return (
    <Fragment>
      {action ? (
        <button onClick={click} className={className}>
          {children}
        </button>
      ) : href ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className={className}>{children}</button>
        </a>
      ) : (
        <Link to={to} className={className}>
          {children}
        </Link>
      )}
    </Fragment>
  );
};

Button.defaultProps = {
  children: "Button content",
  className: "",
  url: "#",
  action: false,
  click: "",
  href: false,
  to: "#",
};

export default Button;
