import React from 'react'
import styles from './filter.module.scss'
import FilterButton from 'components/general/filter/FilterButton'

const Filter = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.ul} >
                <FilterButton>Todos</FilterButton>
                <FilterButton>Norte</FilterButton>
                <FilterButton>Centro</FilterButton>
                <FilterButton>Sur</FilterButton>
            </ul>
        </div>
    )
}

export default Filter
