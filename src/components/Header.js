import { useState } from "react";
import Button from "./partials/Button";
import {connect } from "react-redux";

const Header = (props) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    window.addEventListener('load', () => window.innerWidth > 539 ? setIsNavOpen(true) : setIsNavOpen(false));
    window.addEventListener('resize', () => window.innerWidth > 539 ? setIsNavOpen(true) : setIsNavOpen(false));

    const toogleNav = () => {
        // window.scrollTo(0,0);
        isNavOpen && window.innerWidth < 538 ? setIsNavOpen(false) : setIsNavOpen(true);
    }
    
    var navs = document.getElementsByTagName('a');

    for (let i = 0; i < navs.length; i++) navs[i].addEventListener('click', () => window.scrollTo(0,0));
    
    const NavItem = (props) => {
        return (
            <li className="nav-item"><a href={props.link} onClick={toogleNav}>{props.name}</a></li>
        );
    }

    return (
        <>
            <header className="bg-light top-fixed box-shadow-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xs-2 col-md-6  d-none-md d-none-lg  text-center">
                            <span className="btn-menu" onClick={toogleNav}>   
                                {!isNavOpen && <i className="fa fa-bars" ></i>}
                                {isNavOpen && <i className="fa fa-close" ></i>}
                            </span>
                        </div>
                        <div className="col-xs-10 col-lg-2 d-none-md">
                            <a href="/" className="logo">{props.username}</a>
                        </div>
                        <div className="col-xs-12 col-md-12 col-lg-10">
                            {isNavOpen && <nav>
                                <ol className="nav-bars">
                                    <NavItem link="/" name="Home"/>
                                    <NavItem link="#about" name="About"/>
                                    <NavItem link="#services" name="Services"/>
                                    <NavItem link="#projects" name="Projects"/>
                                    <NavItem link="http://medium.com/lulemoses67" name="Blog"/>
                                    <li className="nav-item"><a href="http://facebook.com"><Button btnColor='btn-primary' name="Hulstrap"/></a></li>
                                </ol>
                            </nav>}
                        </div>
                    </div>
                </div>
            </header><br/>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        username: state.user.name
    }
  }

export default connect(mapStateToProps)(Header);