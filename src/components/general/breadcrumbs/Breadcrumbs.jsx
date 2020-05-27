import React from 'react'
import styles from './breadcrumbs.module.scss'
import { Link } from 'react-router-dom';




const Breadcrumbs = ({ content, slug }) => {
    return (
        <div className={styles.wrapper}>
            <Link to={'/'} className={styles.content}>Home >&nbsp;</Link>
            <Link to={'/' + slug} className={styles.contenttwo}>{content}</Link>
        </div>
    )
}

Breadcrumbs.defaultProps = {
    content: 'Link'
};

export default Breadcrumbs