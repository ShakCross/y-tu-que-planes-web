import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SubFooter = () => {
    return (
        <>
            <Container fluid className="border-top mt-4">
                <Container className="my-3">
                    <Row className="mt-5 mt-lg-auto">
                        <Col lg={2} xs={4}>
                            <h6 className="subfooter-links text-center text-xl-left"><a target="_blank" rel="noopener noreferrer" href="https://www.ytuqueplanes.com/terminos-condiciones.aspx">Mapa de Sitio</a></h6>
                        </Col>
                        <Col lg={2} xs={4}>
                            <h6 className="subfooter-links text-center text-xl-left"><a href="/" rel="noopener noreferrer">Aviso Legal</a></h6>
                        </Col>

                        <Col lg={2} xs={4}>
                            <h6 className="subfooter-links text-center text-xl-left"><a target="_blank" rel="noopener noreferrer" href="https://www.ytuqueplanes.com/terminos-condiciones.aspx">Términos y Condiciones</a></h6>
                        </Col>
                        <Col lg={6} xs={12}>
                            <h6 className="subfooter-links alter-color text-center text-xl-right mt-4 mt-lg-auto">Todos los Derechos Reservados,<span className="subfooter-links"> Ytuqueplanes 2019</span></h6>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default SubFooter
