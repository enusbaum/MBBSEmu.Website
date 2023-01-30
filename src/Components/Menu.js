import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <menu className="m-0 p-0">
            <div className="container-fluid text-center header-background">
                <img
                    className="img-fluid"
                    src="/images/mbbs_header.png"
                    alt="The MajorBBS Emulation Project Logo"
                />
            </div>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-mbbs-blue border-bottom box-shadow mb-3">
                <div className="container bg-mbbs-blue text-center">
                    <button
                        className="navbar-toggler navbar-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse justify-content-center">
                        <ul className="navbar-nav flex-grow-1 justify-content-center">
                            <li className="nav-item px-3">
                                <Link
                                    className="nav-link text-mbbs-light text-mbbs-cyan font-weight-bold"
                                    to="/"
                                    title="MBBSEmu Homepage"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link
                                    className="nav-link text-mbbs-light text-mbbs-cyan font-weight-bold"
                                    to="https://forums.mbbsemu.com/viewforum.php?f=4"
                                    title="The Latest News &amp; Updates from MBBSEmu"
                                    target="_blank"
                                >
                                    News
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link
                                    className="nav-link text-mbbs-light text-mbbs-cyan font-weight-bold"
                                    to="/modules"
                                    title="Download MajorBBS &amp; Worldgroup Modules"
                                >
                                    Modules
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link
                                    className="nav-link text-mbbs-light text-mbbs-cyan font-weight-bold"
                                    to="https://github.com/enusbaum/MBBSEmu/releases"
                                    title="Latest Releases of MBBSEmu on GitHub!"
                                    target="_blank"
                                >
                                    Downloads
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link
                                    className="nav-link text-mbbs-light text-mbbs-cyan font-weight-bold"
                                    to="https://wiki.mbbsemu.com"
                                    title="The MajorBBS Emulation Project Wiki"
                                    target="_blank"
                                >
                                    Wiki
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link
                                    className="nav-link text-mbbs-light text-mbbs-cyan font-weight-bold"
                                    to="/connect"
                                    title="Get Connected with The MajorBBS Emulation Project!"
                                >
                                    Connect
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link
                                    className="nav-link text-mbbs-light text-mbbs-cyan font-weight-bold"
                                    to="https://github.com/mbbsemu/MBBSEmu"
                                    title="MBBSEmu is Open Source on GitHub!"
                                    target="_blank"
                                >
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </menu>
    );
}

export default Menu;
