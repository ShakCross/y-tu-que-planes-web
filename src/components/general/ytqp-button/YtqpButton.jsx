import React from 'react'
import Button from 'react-bootstrap/Button'


const YtqpButton = (props) => {
    return (
        <div className="col-md-12 ytqp-btn">
            <Button onClick={props.clicked} className={`btn-yellow ` + props.myclass}  >
                {props.content}
            </Button>
        </div>       
    )
}

export default YtqpButton
