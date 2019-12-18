import React from 'react'
import PriceTag from 'components/general/price-tag/PriceTag'
import Col from 'react-bootstrap/Col'



const Post = (props) => {
    return (
        <Col xs={12} md={4} style={{ backgroundImage: `url(${props.image})` }} className={props.customClass} >
            <PriceTag 
                price={props.price} 
                sale={props.sale} 
                title={props.title} 
                days={props.days} 
                url={props.url}
                customClassBtn={props.customClassBtn} 
                customClassTitle={props.customClassTitle}
                customClassTitleTwo={props.customClassTitleTwo} 
                customClassDays={props.customClassDays}
            />
        </Col>
    )
}

export default Post
