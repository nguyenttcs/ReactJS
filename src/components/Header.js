import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="app-header mt-3 mb-3">
                <div className="header-main row">
                    <div className="col-2 text-center">
                        <img src="https://i.ibb.co/HtHWr8X/53-531599-file-gnome-stock-person-svg-generic-person-icon.jpg" width={120} alt="Person" />
                    </div>
                    <div className="col-10 d-flex flex-column justify-content-between">
                        <h5>First Name Last Name</h5>
                        <h5>System Admin Global - Tenant A</h5>
                        <a href="https://google.com">
                            <h5>Edit</h5>
                        </a>
                    </div>
                </div>
                <hr className="header-line" />
                <div className="header-menu border border-secondary">
                    <ul className="header-menu-ul">
                        <li className="menu-item">
                            <a className="text-dark" href="https://google.com">Localisation</a>
                        </li>
                        <li className="menu-item">
                            <a className="text-dark" href="https://google.com">System Config</a>
                        </li>
                        <li className="menu-item contents">
                            <a className="text-dark" href="https://google.com">Contents</a>
                            <div className="contents-item border border-secondary">
                                <p>View All</p>
                                <p>Search</p>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a className="text-dark" href="https://google.com">Features</a>
                        </li>
                        <li className="menu-item">
                            <a className="text-dark" href="https://google.com">Operator</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;