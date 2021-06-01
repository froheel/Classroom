import React from 'react';
import {Link} from "react-router-dom";

class NavbarClass extends React.Component {

    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to={"/stream"} className="nav-link" href="#">Stream</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/people"} className="nav-link" href="#">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" href="#">Disabled</Link>
                    </li>
                </ul>
            </div>
        </nav>;
    }
}

export default NavbarClass;