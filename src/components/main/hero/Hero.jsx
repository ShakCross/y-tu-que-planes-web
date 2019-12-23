import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
// import Slider from "react-slick";


// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 7000,
//     adaptiveHeight: true,
//     arrows: false,
//     appendDots: dots => (
//         <div
//             style={{
//                 bottom: 0
//             }}
//         >
//             <ul> {dots} </ul>
//         </div>
//     ),
//     customPaging: i => (
//         <button className="hero-slider-button">
//             {i + 1}
//         </button>
//     ),
// };

// const data1 = [
//     {
//         price: "S/ 230",
//         sale: "S/ 500",
//         title: "Trekking al Colca",
//         days: "02 Días/01 Noche",
//         img: "https://picsum.photos/id/1020/500/500"
//     },
//     {
//         price: "S/ 230",
//         sale: "S/ 500",
//         title: "Trekking al Colca",
//         days: "02 Días/01 Noche",
//         img: "https://picsum.photos/id/1021/500/500"
//     },
//     {
//         price: "S/ 230",
//         sale: "S/ 500",
//         title: "Trekking al Colca",
//         days: "02 Días/01 Noche",
//         img: "https://picsum.photos/id/1022/500/500"
//     },
// ]


const Destinos = (props) => {

    return (
        <Container fluid>
            <Row className="mb-5 justify-content-around">
                <Container fluid className="p-0">
                    <Col className="p-0" xs={12}>
                        <div>
                            {/* <Slider {...settings}> */}
                            <div>
                                <div className="d-flex justify-content-center w-100">
                                    <Container className="hero-headings-container">
                                        <Row>
                                            <div className="hero-heading-row">
                                                <h1 className="hero-heading">Encuentra el destino perfecto</h1>
                                                <h2 className="hero-subheading">para un Año Nuevo increíble</h2>
                                                <Button onClick={props.clicked} className="hero-slider-btn whatsapp-icon d-flex align-items-center my-4 rounded-pill">
                                                    <span className="mb-0 ml-1">Elige aquí</span>
                                                </Button>
                                            </div>
                                        </Row>
                                    </Container>
                                    {/* <video className="d-block w-100" autoPlay crossOrigin="anonymous" loop>
                                            <source src="https://a0.muscache.com/v/15/ab/15ab6cff-e313-5437-bb51-255c1060b29e/15ab6cffe3135437bb51255c1060b29e_1500k_1.mp4?imformat=h265&amp;impolicy=high_quality" type="video/mp4; codecs=hevc" />
                                            <source src="https://a0.muscache.com/v/15/ab/15ab6cff-e313-5437-bb51-255c1060b29e/15ab6cffe3135437bb51255c1060b29e_1500k_1.mp4?impolicy=high_quality" type="video/mp4" />
                                        </video> */}
                                    <img
                                        height="450px"
                                        className="d-block w-100"
                                        src="https://picsum.photos/id/1022/1900/1600"
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                            {/* <div>
                                    <div className="d-flex justify-content-center w-100">
                                        <Container className="hero-headings-container">
                                            <Row>
                                                <div className="hero-heading-row">
                                                    <h1 className="text-center hero-heading">Descubre los mejores destinos</h1>
                                                    <h1 className="text-center hero-subheading">Para este fin de año</h1>
                                                    <Button className="hero-slider-btn whatsapp-icon d-flex align-items-center my-4 rounded-pill">
                                                        <h5 className="mb-0 ml-1">Ver más</h5>
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Container>
                                        <img
                                            height="450px"
                                            className="d-block w-100"
                                            src="https://picsum.photos/id/1022/1900/1600"
                                            alt="First slide"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-center w-100">
                                        <Container className="hero-headings-container">
                                            <Row>
                                                <div className="hero-heading-row">
                                                    <h1 className="text-center hero-heading">Descubre los mejores destinos</h1>
                                                    <h1 className="text-center hero-subheading">Para este fin de año</h1>
                                                    <Button className="hero-slider-btn whatsapp-icon d-flex align-items-center my-4 rounded-pill">
                                                        <h5 className="mb-0 ml-1">Ver más</h5>
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Container>
                                        <img
                                            height="450px"
                                            className="d-block w-100"
                                            src="https://picsum.photos/id/1022/1900/1600"
                                            alt="First slide"
                                        />
                                    </div>
                                </div> */}
                            {/* </Slider> */}
                        </div>
                    </Col>
                </Container>
            </Row>
        </Container>
    )
}

export default Destinos
