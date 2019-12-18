import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


function PriceTag(props) {
    return (
        <div className="price-tag-position">
            <Container className="bg-purple price-tag-border">
                <Row>
                    <Col className="d-flex align-items-center price-tag-col">
                        <div>
                            <div className="price-tag-price">
                                <h3 className={`price-tag-price-title ` + props.customClassTitle}> {props.price} </h3>
                                <p className="price-tag-price-sale text-center">Antes: <s>{props.sale}</s></p>
                            </div>
                        </div>
                    </Col>
                    <Col className="px-1 d-flex align-items-center price-flex-center">
                        <div className="price-tag-place">
                            <h4 className={`price-tag-place-title ` + props.customClassTitleTwo}>{props.title}</h4>
                            <p className={`price-tag-place-days ` + props.customClassDays}>{props.days}</p>
                        </div>
                    </Col>
                    <Col className="price-tag-container-btn">
                        <a href={props.url} target="_blank" rel="noopener noreferrer">
                            <Button className={`price-tag-btn ` + props.customClassBtn}>Ver Oferta</Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PriceTag
