import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import SocialICon from './SocialICon'
import Brand1 from 'assets/img/iperu.png';
import Brand2 from 'assets/img/promperu.png';
import Brand3 from 'assets/img/perumarca.png';

const MainFooter = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={3} md={6} xs={12} className="order-3 order-md-1 d-md-block d-none">
                        <div className="mt-2">
                            <h5 className="footer-heading text-center text-md-left">
                                Información para tu viaje
                            </h5>
                            <ul className="footer-li text-center text-md-left">
                                <a target="_blank" rel="noopener noreferrer" href="http://export.promperu.gob.pe/emailing/2019/feb/pdf/feriados_2019.pdf"><li>Lista de Feriados</li></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.senamhi.gob.pe/"><li>Clima y Pronóstico del Tiempo</li></a>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.sernanp.gob.pe/"><li>Áreas Naturales Protegidas</li></a>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6} xs={12} className="order-2 order-md-2">
                        <div>
                            <div className="footer-phone d-flex justify-content-center justify-content-md-start">
                                <Button className="btn-green mr-2 whatsapp-icon d-flex align-items-center px-4 rounded-pill">
                                    <i className="fa fa-whatsapp"></i>
                                    <h5 className="mb-0 ml-1 fs-14 footer-asis">
                                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/051944492314">
                                            Asistencia al viajero
                                        </a>
                                    </h5>
                                </Button>
                            </div>
                            <div className="mt-4 mb-5 text-center text-md-left">
                                <h5 className="ayuda">
                                    ¿Necesitas Ayuda?
                            </h5>
                                <p className="ayuda-p">Escríbenos las 24 horas</p>
                            </div>
                            <div className="mt-2 d-block d-md-none">
                                <h5 className="footer-heading text-center text-md-left">
                                    Información para tu viaje
                            </h5>
                                <ul className="footer-li text-center text-md-left">
                                    <a target="_blank" rel="noopener noreferrer" href="http://export.promperu.gob.pe/emailing/2019/feb/pdf/feriados_2019.pdf"><li>Lista de Feriados</li></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.senamhi.gob.pe/"><li>Clima y Pronóstico del Tiempo</li></a>
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.sernanp.gob.pe/"><li>Áreas Naturales Protegidas</li></a>
                                </ul>
                            </div>
                            <div>
                                <h5 className="footer-heading text-center text-md-left mb-5 mb-md-2">Síguenos</h5>
                                <ul className="d-flex justify-content-around mt-3">
                                    <SocialICon abrv="fb" name='facebook' target="https://www.facebook.com/pages/Visit-Peru/524042817717056" />
                                    <SocialICon abrv="tw" name='twitter' target="https://twitter.com/conoceelperu" />
                                    <SocialICon abrv="in" name='instagram' target="https://www.instagram.com/ytuqueplanes/" />
                                    <SocialICon abrv="you" name='youtube-play' target="http://www.youtube.com/visitperu" />
                                    <SocialICon abrv="spo" name='spotify' target="https://open.spotify.com/user/yt%C3%BAqu%C3%A9planes/playlist/7pTRlBhxN2YhkEqtwu0T4k" />
                                </ul>
                            </div>
                            <Row className="justify-content-around mx-4 mx-md-5 my-4 m-md-auto d-md-none d-flex">
                                <Image alt="iperu-logo" className="my-img mr-md-5 mt-md-3" src={Brand1} />
                                <Image alt="promperu-logo" className="my-img mr-md-5 mt-md-3" src={Brand2} />
                                <Image alt="marca-peru-logo" className="my-img mr-md-5 mt-md-3" src={Brand3} />
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12} className="order-1 order-md-3">
                        <div className="mt-2 text-center text-md-left">
                            <h5 className="footer-heading">¡Suscríbete para recibir nuevas ofertas y novedades!</h5>
                            <InputGroup className="my-34px">
                                <FormControl className="input-group-border"
                                    placeholder="Ingresa tu email"
                                    aria-label="Ingresa tu email"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button disabled variant="purple" className="px-3">Suscribirme</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <Row className="justify-content-around justify-content-md-start my-4 m-md-auto d-md-flex d-none">
                                <Image alt="iperu-logo" className="my-img mr-md-5 mt-md-3" src={Brand1} />
                                <Image alt="promperu-logo" className="my-img mr-md-5 mt-md-3" src={Brand2} />
                                <Image alt="marca-peru-logo" className="my-img mr-md-5 mt-md-3" src={Brand3} />
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <style type="text/css">
                {`
                    .btn-purple {
                        color: white;
                        background-color: #990564;
                        border-color: #990564;
                        border-radius: 6px;
                        font-family: ClanOffc;
                        cursor: not-allowed;
                        }
                    .btn-purple:hover    {
                        outline: 0;
                        box-shadow: 0 0 0 0.2rem rgba(180,43,172,.25);
                        color: white;
                        text-decoration: none;                       
                    }

                `}
            </style>
        </>

    )
}

export default MainFooter
