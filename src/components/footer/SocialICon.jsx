import React from 'react'

const SocialICon = (props) => {
    return (
        <div 
            className={`icon social ${props.abrv}`}
        >
            <i 
                className={`fa fa-${props.name}`}
            >
            </i>
        </div>
    )
}

export default SocialICon
