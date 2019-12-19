import React from 'react'

const SocialICon = (props) => {
    return (
        <a 
            href={props.target}
            target="_blank"
            rel="noopener noreferrer"
            className={`icon social ${props.abrv}`}
        >
            <i 
                className={`fa fa-${props.name}`}
            >
            </i>
        </a>
    )
}

export default SocialICon
