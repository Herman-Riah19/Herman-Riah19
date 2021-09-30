import React from 'react'
import menu from '../../model/navbar.model'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
    const changeHandler = (e) => {
        e.preventDefault();
        document.querySelector('.toggle').toggleAttribute('open');
    }

    return (
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar navbar-expand-md item-center fixed-top">
                <a className="navbar-brand mr-auto" href="/">Herman Christian</a>
                <button className="navbar-toggler" type="button" onClick={changeHandler} data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars toggle"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        {menu.map(item => (
                            <li className="nav-item">
                                <NavLink exact to={item.path} className="nav-link" activeClassName="active">
                                    <i className={item.icon}></i> 
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="collapse navbar-collapse ml-auto" id="navbarCollapse">
                
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
