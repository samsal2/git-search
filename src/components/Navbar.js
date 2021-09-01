import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            Home
          </Link>
        </li>
      </ul>
    </nav>)
};

Navbar.defaultProps = {
  title: "Test"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar