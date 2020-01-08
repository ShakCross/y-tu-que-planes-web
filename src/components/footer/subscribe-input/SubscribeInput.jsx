import React from 'react'
import styles from './subscribe-input.module.scss'

const SubscribeInput = () => {
    return (
        <form id="form" className={styles.form}>
            <input className={styles.input} placeholder="Ingresa tu email" type="email" id="email" required />
            <button className={styles.button} type="submit" id="submit">
                Suscribirme
            </button>
        </form>
    )
}

export default SubscribeInput
