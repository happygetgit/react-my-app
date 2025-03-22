import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        {/* <a className="navbar-brand" href="/">
          {props.title}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                {props.home}
              </Link>
              {/* <a className="nav-link" aria-current="page" href="/">
                {props.home}
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
              {/* <a className="nav-link" href="/about">
                {props.aboutText}
              </a> */}
            </li>
          </ul>
          <div
            className="form-check btn-group p-2"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              className="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value={props.bgcolors[0]}
              checked={props.selected === props.bgcolors[0]}
              onChange={(e) => {
                props.selectedMode(e.target.value);
              }}
            />
            <label
              className="form-check-label ms-2 me-5 "
              htmlFor="flexRadioDefault1"
              style={{ color: props.myStyle.color }}
            >
              {props.bgcolors[0]} mode
            </label>

            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value={props.bgcolors[1]}
              checked={props.selected === props.bgcolors[1]}
              onChange={(e) => {
                props.selectedMode(e.target.value);
              }}
            />
            <label
              className="form-check-label ms-2 me-5"
              htmlFor="flexRadioDefault2"
              style={{ color: props.myStyle.color }}
            >
              {props.bgcolors[1]} mode
            </label>

            <input
              className="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value={props.bgcolors[2]}
              checked={props.selected === props.bgcolors[2]}
              onChange={(e) => {
                props.selectedMode(e.target.value);
              }}
            />
            <label
              className="form-check-label ms-2 me-5 "
              htmlFor="flexRadioDefault1"
              style={{ color: props.myStyle.color }}
            >
              {props.bgcolors[2]} mode
            </label>

            <input
              className="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value={props.bgcolors[3]}
              checked={props.selected === props.bgcolors[3]}
              onChange={(e) => {
                props.selectedMode(e.target.value);
              }}
            />
            <label
              className="form-check-label ms-2 me-5 "
              htmlFor="flexRadioDefault1"
              style={{ color: props.myStyle.color }}
            >
              {props.bgcolors[3]} mode
            </label>
          </div>
          <div className={`form-check form-switch text-${props.myStyle}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: props.myStyle.color }}
            >
              {props.modeText}
            </label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  toggleMode: PropTypes.string,
};
