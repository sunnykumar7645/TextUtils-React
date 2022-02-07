import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
  return (    
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="TextUtils-React/"><h1>{props.title}</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="TextUtils-React/textform">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="TextUtils-React/about">{props.about}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            </ul>
                        </li>                  
                        
                    </ul>                
                        
                    <form className="d-flex">
                        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    
                    <div className={`form-check form-switch mx-3 my-2 text-${props.mode === "light"? "dark" : "light"} `}>
                        <label className="form-check-label mx-2"  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>

                    {/* <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item dropdown my-2 mx-5">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dark Mode
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><div className="form-check form-switch mx-2">
                                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                    </div>
                                </li>
                                
                            </ul>
                        </li>
                    </ul> */}
                
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

