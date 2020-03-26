import React from 'react'
import styles from './limit-wrapper.module.scss'

const LimitWrapper = ({children}) => {
    return (
        <div className={styles.wrapper} >
            {children}
        </div>
    )
}

export default LimitWrapper
