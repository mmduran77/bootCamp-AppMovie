
const navBarAside = () => {
    return(
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                    <div className="container-fluid d-flex flex-column p-0">
                        <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/">
                        <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
                        <div className="sidebar-brand-text mx-3"><span>Fullpelis</span></div>
                        </a>
                        <hr className="sidebar-divider my-0"/>
                        <ul className="navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item"><a className="nav-link" href="/about"><i className="fas fa-user"></i><span>About</span></a></li>

                            <li className="nav-item"><a className="nav-link" href="register.html"><i className="fas fa-user-circle"></i><span>Register</span></a></li>

                            <li className="nav-item"><a className="nav-link active" href="/notfound"><i className="fas fa-exclamation-circle"></i><span>Page Not Found</span></a></li>

                            <li className="nav-item"><a className="nav-link" href="/contact"><i className="fas fa-window-maximize"></i><span>Contact</span></a></li>
                        </ul>
                        <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                    </div>
                </nav>
    )
}
export default navBarAside