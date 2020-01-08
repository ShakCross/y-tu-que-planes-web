import React from 'react'
import styles from './wrapper-fest.module.scss'

const WrapperFest = ({ children }) => {
    return (
        <div className={styles.wrapper}>

                {children}

        </div>
    )
}

WrapperFest.defaultProps = {
    children: '',
};

export default WrapperFest
