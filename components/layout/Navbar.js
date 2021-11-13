import React from "react";
import { Link, Router } from "react-router-dom";
import Container from './Container'
import logo from '../../fortaleza-escudo.png';

import './Navbar.css'

export default (props) => {


    return (
        <nav className="navbar">
            <Container>
                <Link to="/">
                    <img className="Logotipo" src={logo} />
                </Link>
                <ul className="list">
                    <li className="item">
                        <Link to="/contato"><strong>Bora Leão</strong></Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );

}
