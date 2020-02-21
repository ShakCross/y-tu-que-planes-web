import React from 'react'
import styles from './breadcrumbs.module.scss'
import { Link } from 'react-router-dom';




const Breadcrumbs = ({content, slug}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner_wrapper}>
                <Link to={'/'} className={styles.content}>Experiencias >&nbsp;</Link>
                <Link to={'/'+ slug} className={styles.contenttwo}>{content}</Link>
            </div>
        </div>
    )
}

Breadcrumbs.defaultProps = {
    content: 'some'
};

export default Breadcrumbs
