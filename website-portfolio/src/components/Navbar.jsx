import React from "react";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ backgroundColor: '#d1e6e8' }}></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                onClick={() => setCurrentPage("home")}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => setCurrentPage("portfolio")}
                className="nav-link"
                href="#"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => setCurrentPage("contact")}
                className="nav-link"
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => setCurrentPage("resume")}
                className="nav-link"
                aria-disabled="true"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
