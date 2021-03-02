import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">ValorantProTeam</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">Pro Lists</a>
          <a className="nav-link" href="#">Players</a>
          <a className="nav-link" href="#">Guids</a>
          <a className="nav-link" href="#">Reviews</a>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;