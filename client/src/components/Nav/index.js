import React from "react";


function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" style={{ "zIndex": "10000"}}>
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Google Books Search</h2>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/">Search Books</a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved">Saved Books</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 export default Nav;