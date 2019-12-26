import React from 'react'
import Slider from "react-slick";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import data from 'data/blog.json'


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: 10,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            rows: 2,
            slidesPerRow: 1
          }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
                rows: 2,
                slidesPerRow: 1
            }
          }
    ]
};

const Blog = () => {
    
    return (
        <Container>
            <Col className="p-0">
                <h2 className="mb-4 text-center blog-title">  Lo que todo viajero debe saber </h2>
                <Slider {...settings}>
                    {data.map(post =>
                        <Container key={post.id} className="py-3 px-1">
                            <div className="card card-slider">
                                <Row>
                                    <Col xl={5} lg={5} md={5} sm={5} xs={5} className="pr-0 xxs">
                                        <img className="card-image" src={post.imagen} alt={post.alt}/>
                                    </Col>
                                    <Col md={7} xs={7} className="p-3 xxs">
                                        <div className="card-block px-3">
                                            <h3 className="card-title blog-card-title mt-3">{post.titulo}</h3>
                                            <p className="card-text blog-card-desc mb-4">{post.contenido.substring(0, 100) + "..."}</p>
                                            <a className="blog-card-link" target="_blank" rel="noopener noreferrer" href={post.url}>Ver Más</a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>)}
                </Slider>
            </Col>
        </Container>
    )
}

export default Blog
