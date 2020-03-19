import * as React from 'react'
import { NavLink, Link } from 'react-router-dom';

const TopNavBar: React.FC<TopNavBarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
            <h1 className="bavbar-brand text-white">Racers Paradise</h1>
            <div className="collapse navbar-collapse" id="nav-alt" >
                <div className="navbar-nav ml-auto" >
                        <NavLink exact to="/login" activeClassName="btn btn-lg btn-secondary mx-1 text-white" className="btn btn-outline-secondary mx-1" >
                            login or Register
              </NavLink>
                </div>
            </div>
        </nav>
    )
}

interface TopNavBarProps { }

export default TopNavBar