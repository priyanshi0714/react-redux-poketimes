import React from 'react'
import {Link, withRouter  } from 'react-router-dom'

const Navbar = (props)  => {
    //setTimeout(()=>{props.history.push('/about')},4000);//redirection
    return (
        <nav className="nav-wrapper red bg-darken-3">
            <div className="container">
                <a  className="brand-logo">PokeTimes</a>
                <ul className="right">
                    {/* <li><a href="/">Home</a></li> */}
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Navlink to="/">Home</Navlink></li> */}
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>  
            </div>
        </nav>
    )
}
export default withRouter(Navbar)