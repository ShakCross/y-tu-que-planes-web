import React from 'react'
import styles from './tag.module.scss'


const Tag = ({ title, active, click }) => {
    
    return (
        <div className={ active ? styles.wrapper : styles.wrapper_inactive } onClick={click}>
            {title}
        </div>
    )
}

Tag.defaultProps = {
    title: 'Tag',
};

export default Tag
