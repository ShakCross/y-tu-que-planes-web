import React from 'react'
import styles from './tag.module.scss'


const Tag = ({ title, active, click }) => {
    
    return (
        <h3 className={ active ? styles.wrapper : styles.wrapper_inactive } onClick={click}>
            {title}
        </h3>
    )
}

Tag.defaultProps = {
    title: 'Tag',
};

export default Tag
