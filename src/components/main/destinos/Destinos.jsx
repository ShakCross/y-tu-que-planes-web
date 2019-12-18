import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Slider from "react-slick";
import Post from 'components/general/post/Post'


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="ytqp-slick-next" onClick={onClick}>
            <i className="fa fa-chevron-right ytqp-next-arrow"></i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="ytqp-slick-prev" onClick={onClick}>
            <i className="fa fa-chevron-left ytqp-prev-arrow"></i>
        </div>
    );
}


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                arrows: false,
                centerPadding: "50px",
            }
        },
        {
            breakpoint: 441,
            settings: {
                centerMode: true,
                arrows: false,
                centerPadding: "17px",
            }
        }
    ]
};

const data1 = [
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1020/500/500"
    },
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1021/500/500"
    },
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1022/500/500"
    },
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1023/500/500"
    }
]

const data2 = [
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1042/500/500"
    },
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1035/500/500"
    },
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1036/500/500"
    },
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1037/500/500"
    }
]

const data3 = [
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1038/500/500"
    },
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1039/500/500"
    },
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1040/500/500"
    },
    {
        price: "S/ 230",
        sale: "S/ 500",
        title: "Trekking al Colca",
        days: "02 Días/01 Noche",
        img: "https://picsum.photos/id/1002/500/500"
    }
]



const Destinos = () => {
    return (

        <Container>
            <Row>
                <Col xs={12}>
                    <h2 className="mb-5 text-center destinos-title"> Destinos más populares para esta fecha </h2>
                </Col>
            </Row>
            <Row className="mb-5 justify-content-around">
                <Col xs={12} md={6} lg={4} className="destinos-slider-container">
                    <Col xs={12}>
                        <h2 className="mb-2 text-center destinos-subtitle-one"> Arequipa </h2>
                    </Col>
                    <Slider {...settings}>
                        {data1.map((posts, index) =>
                            <Container key={index} className="py-3 px-1">
                                <Post
                                    key={index}
                                    customClass="post post-slider" 
                                    image={posts.img}
                                    title={posts.title}
                                    price={posts.price}
                                    days={posts.days}
                                    sale={posts.sale}
                                    customClassBtn="destinos-price-tag-btn"
                                    customClassTitle="destinos-price-tag-price-title"
                                    customClassTitleTwo="destinos-price-tag-place-title"
                                    customClassDays="destinos-price-tag-place-days"
                                />
                            </Container>)}
                    </Slider>
                </Col>
                <Col xs={12} md={6} lg={4} className="destinos-slider-container">
                    <Col xs={12} className="mt-4 mt-md-0">
                        <h2 className="mb-2 text-center destinos-subtitle-two"> Piura </h2>
                    </Col>
                    <Slider {...settings}>
                        {data2.map((posts, index) =>
                            <Container key={index} className="py-3 px-1">
                                <Post
                                    key={index}
                                    customClass="post post-slider" 
                                    image={posts.img}
                                    title={posts.title}
                                    price={posts.price}
                                    days={posts.days}
                                    sale={posts.sale}
                                    customClassBtn="destinos-price-tag-btn"
                                    customClassTitle="destinos-price-tag-price-title"
                                    customClassTitleTwo="destinos-price-tag-place-title"
                                    customClassDays="destinos-price-tag-place-days"
                                />
                            </Container>)}
                    </Slider>
                </Col>

                <Col xs={12} md={12} lg={4} className="destinos-slider-container">
                    <Col xs={12} className="mt-4 mt-md-0">
                        <h2 className="mb-2 text-center destinos-subtitle-three"> Lambayeque </h2>
                    </Col>
                    <Slider {...settings}>
                        {data3.map((posts, index) =>
                            <Container key={index} className="py-3 px-1">
                                <Post
                                    key={index}
                                    customClass="post post-slider" 
                                    image={posts.img}
                                    title={posts.title}
                                    price={posts.price}
                                    days={posts.days}
                                    sale={posts.sale}
                                    customClassBtn="destinos-price-tag-btn"
                                    customClassTitle="destinos-price-tag-price-title"
                                    customClassTitleTwo="destinos-price-tag-place-title"
                                    customClassDays="destinos-price-tag-place-days"
                                />
                            </Container>)}
                    </Slider>
                </Col>
            </Row>
        </Container>
    )
}

export default Destinos
