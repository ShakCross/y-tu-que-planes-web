import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const Destinos = (props) => {

    return (
        <Container fluid>
            <Row className="mb-5 justify-content-around">
                <Container fluid className="p-0">
                    <Col className="p-0" xs={12}>
                        <div>
                            <div>
                                <div className="d-flex justify-content-center w-100">
                                    <header>
                                        <div className="overlay"></div>
                                        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                                            <source src="https://videos-808visual.s3.amazonaws.com/video.mp4" type="video/mp4" />
                                        </video>
                                        <div className="container h-100 mt-5">
                                            <div className="d-flex h-100 text-left align-items-center">
                                                <div className="w-100 text-white">
                                                    <h1 className="hero-heading">Encuentra el destino perfecto</h1>
                                                    <h2 className="hero-subheading">para un Año Nuevo increíble</h2>
                                                    <Button onClick={props.clicked} className="hero-slider-btn whatsapp-icon d-flex align-items-center my-4 rounded-pill">
                                                        <span className="mb-0 ml-1">Elige aquí</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Container>
            </Row>
        </Container>
    )
}

export default Destinos
