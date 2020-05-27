import React from 'react'
import styles from './limit-wrapper.module.scss'

const LimitWrapper = ({children, className}) => {
    return (
        <div className={styles.wrapper} >
            {children}
        </div>
    )
}

LimitWrapper.defaultProps = {
    children: '',
    className: ''
};

export default LimitWrapper
