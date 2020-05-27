import React from 'react'
import styles from './select.module.scss'

const Select = ({className}) => {
    return (
        <select className={className}>
            <option value="Amazonas">Amazonas</option>
            <option value="La Libertad">La Libertad</option>
        </select>
    )
}

export default Select
