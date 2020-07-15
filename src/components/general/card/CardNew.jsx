import React from "react";
import { Link } from "react-router-dom";

const Card = ({ children, to, className }) => {
  return <Link className={className} to={to}>{children}</Link>;
};

Card.defaultProps = {
    children: '',
    to: '/',
    className: ''
};

export default Card;
