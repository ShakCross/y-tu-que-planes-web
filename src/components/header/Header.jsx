import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Logo from 'assets/img/ytqp-logo.png';
import Alert from 'assets/img/alert_top.png';
import User from 'assets/img/user.png';
import Search from 'assets/img/search.png';


const Header = () => {

    const [toggle, setToggle] = useState(true);
    const handleToggle = () => setToggle(!toggle)

    return (
        <div>
            <Container>
                <Row className="justify-content-center header-row">
                    <nav className="header-nav d-flex align-items-center justify-content-between">
                        <div className="menu-item" >
                            <a href="https://www.ytuqueplanes.com/destinos">Destinos</a>
                        </div>
                        <div className="menu-item">
                            <a href="https://www.ytuqueplanes.com/ofertas">Ofertas</a>
                        </div>
                        <div className="menu-item">
                            <a href="https://www.ytuqueplanes.com/actividades/1_aventura">Experiencias</a>                          
                        </div>
                        <div className="menu-logo">
                            <a href="https://www.ytuqueplanes.com/"><img alt="" src={Logo} /></a>
                        </div>
                        <div className="menu-item">
                            <a href="https://www.ytuqueplanes.com/rutas-cortas">Rutas Cortas</a>
                        </div>
                        <div className="menu-item">
                            <a href="https://www.ytuqueplanes.com/novedades">Guía Viajera</a>                          
                        </div>
                        <div style={{cursor: "not-allowed"}} className="menu-item-icons">
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
                            <a href="#" className="hidden-collapse" onClick={handleToggle}>
                                <i className="fa fa-bars"></i>
                            </a>
                        </div>
                    </nav>
                    { toggle ? ('') : 
                    (<div className="toggle-menu hidden-lg">
                        <div className="menu-item-mobile no-border" >
                            <a href="https://www.ytuqueplanes.com/destinos">Destinos</a>
                        </div>
                        <div className="menu-item-mobile">
                            <a href="https://www.ytuqueplanes.com/ofertas">Ofertas</a>
                        </div>
                        <div className="menu-item-mobile">
                            <a href="https://www.ytuqueplanes.com/actividades/1_aventura">Experiencias</a>
                        </div>
                        <div className="menu-item-mobile">
                            <a href="https://www.ytuqueplanes.com/rutas-cortas">Rutas Cortas</a>
                        </div>
                        <div className="menu-item-mobile">
                            <a href="https://www.ytuqueplanes.com/novedades">Guía Viajera</a>
                        </div>
                    </div>) }
                </Row>
            </Container>
        </div>
    )
}

export default Header
