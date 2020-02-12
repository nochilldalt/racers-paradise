import * as React from 'react'
import { NavLink, Link } from 'react-router-dom';

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link to="/" className="navbar-brand text-white">Racers Paradise</Link>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-alt" >
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse" id="nav-alt" >
        <div className="navbar-nav ml-auto" >
          <NavLink exact to="/" className="btn btn-secondary mx-1" >
            View Posts
              </NavLink>
        </div>
      </div>
    </nav>
  )
}

interface NavBarProps { }

export default NavBar