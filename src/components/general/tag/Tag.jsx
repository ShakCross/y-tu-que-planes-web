import React from 'react'
import styles from './tag.module.scss'


const Tag = ({ title }) => {
    return (
        <div className={styles.wrapper}>
            {title}
        </div>
    )
}

Tag.defaultProps = {
    title: 'Tag',
};

export default Tag
