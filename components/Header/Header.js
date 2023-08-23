import React from 'react'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { DiGithub } from 'react-icons/di'
import { Link } from 'react-scroll'
// import '../../styles/header.css'

const  Header = ({toggle}) => {
  
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-dark text-white fixed-top">
                <div className="container">
                    <Link className="logo" to="">
                    <span className='logo-icon'>K</span>
                    <span className="ossai">Ossai</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link ListMenu">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link ListMenu">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link ListMenu">Clients</Link>
                            </li>
                        </ul>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/kenneth-ossai/" rel="noreferrer" target="_blank">
                                <span className='desktopButton'>
                                    <TiSocialLinkedinCircular className='linkedIn'  />
                                </span>
                            </a>
                            <a href="https://github.com/keniossai" rel="noreferrer" target="_blank">
                                <span className='desktopButton'>
                                    <DiGithub className="gitHub"/>
                                </span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </nav>
         {/* <nav className="header">
           <Link className="logo" to="">
                <span className='logo-icon'>K</span>
                <span className="ossai">Ossai</span>
                </Link>
                <div className="desktopMenuItems">
                <Link className="ListMenu">Home</Link>
                <Link className="ListMenu">About</Link>
                <Link className="ListMenu">Portfolio</Link>
                <Link className="ListMenu">Clients</Link>
                </div>
                <div className="socials">
                    <span className='desktopButton'>
                        <TiSocialLinkedinCircular className='linkedIn'  />
                    </span>
                    <span className='desktopButton'>
                        <DiGithub className="gitHub"/>
                    </span>
                    
                </div>
        </nav>  */}
        </>
    )
}

export default Header
