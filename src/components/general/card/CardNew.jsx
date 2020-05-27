import React from "react";
import { Link } from "react-router-dom";

const Card = ({ children, to }) => {
  return <Link to={to}>{children}</Link>;
};

Card.defaultProps = {
    children: '',
    to: '/'
};

export default Card;
