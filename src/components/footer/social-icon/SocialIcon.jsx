import React from 'react'
import styles from './social-icon.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialICon = ({ target, xclassname, name, xsvg }) => {
    return (
        <a
            href={target}
            target="_blank"
            rel="noopener noreferrer"
            className={`
            ${styles.icon} 
            ${styles[xclassname]}
        `}
        >
            <FontAwesomeIcon className={`
                ${styles[xsvg]}
            `} 
                icon={name} 
            />
        </a>
    )
}

SocialICon.defaultProps = {
    target: '',
    xclassname: '',
    name: '',
    xsvg: ''
};


export default SocialICon
