import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Logo from 'assets/img/ytqp-logo.png';
import Alert from 'assets/img/alert_top.png';
import User from 'assets/img/user.png';
import Search from 'assets/img/search.png';
import Link from 'react-router-dom/Link'


const Header = () => {

    const [toggle, setToggle] = useState(true);
    const handleToggle = () => setToggle(!toggle)

    return (
        <div>
            <Container>
                <Row className="justify-content-center header-row">
                    <nav className="header-nav d-flex align-items-center justify-content-between">
                        <div className="menu-item" >
                            Destinos
                        </div>
                        <div className="menu-item">
                            Ofertas
                        </div>
                        <div className="menu-item">
                            Experiencias
                        </div>
                        <div className="menu-logo">
                            <Link to='/' ><img alt="" src={Logo} /></Link>
                        </div>
                        <div className="menu-item">
                            Rutas Cortas
                        </div>
                        <div className="menu-item">
                            Guía Viajera
                        </div>
                        <div className="menu-item-icons">
                            <img className="header-icon-bg" src={Alert} alt="" />
                            <img src={User} alt="" />
                            <img className="ml-11" src={Search} alt="" />
                        </div>
                        <div className="align-items-center hidden-lg">
                            <a href="/">
                                <img src={Alert} alt="" />
                            </a>
                            <a href="/">
                                <img src={Search} alt="" />
                            </a>
                            <a href="/" className="hidden-collapse" onClick={handleToggle}>
                                <i class="fa fa-bars"></i>
                            </a>
                        </div>
                    </nav>
                    { toggle ? ('') : 
                    (<div className="toggle-menu hidden-lg">
                        <div className="menu-item-mobile no-border" >
                            Destinos
                        </div>
                        <div className="menu-item-mobile">
                            Ofertas
                        </div>
                        <div className="menu-item-mobile">
                            Experiencias
                        </div>
                        <div className="menu-item-mobile">
                            Rutas Cortas
                        </div>
                        <div className="menu-item-mobile">
                            Guía Viajera
                        </div>
                    </div>) }
                </Row>
            </Container>
        </div>
    )
}

export default Header
