import React, { useState } from 'react'
import styles from './filter.module.scss'
import FilterButton from 'components/general/filter/FilterButton'

const Filter = () => {

    const [isActive1, setIsActive1] = useState(false)

    const handleIsActive1 = () => {
        setIsActive1(true)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(false)
    }

    const [isActive2, setIsActive2] = useState(false)

    const handleIsActive2 = () => {
        setIsActive2(true)
        setIsActive1(false)
        setIsActive3(false)
        setIsActive4(false)
    }

    const [isActive3, setIsActive3] = useState(false)

    const handleIsActive3 = () => {
        setIsActive3(true)
        setIsActive1(false)
        setIsActive2(false)
        setIsActive4(false)
    }

    const [isActive4, setIsActive4] = useState(false)

    const handleIsActive4 = () => {
        setIsActive4(true)
        setIsActive1(false)
        setIsActive2(false)
        setIsActive3(false)
    }

    const sorted = () => {
        console.log('Hi');
    }
    const events1 = () => {
        handleIsActive1
        sorted()
    }

    const events2 = () => {
        handleIsActive2
        sorted()
    }

    const events3 = () => {
        handleIsActive3
        sorted()
    }

    const events4 = () => {
        handleIsActive4
        sorted()
    }

    const tags = [
        {
            "name": "Todos",
            "isActive": isActive1,
            "sort": sorted,
            "event": events1
        },
        {
            "name": "Norte",
            "isActive": isActive2,
            "sort": sorted,
            "event": events2
        },
        {
            "name": "Centro",
            "isActive": isActive3,
            "sort": sorted,
            "event": events3
        },
        {
            "name": "Sur",
            "isActive": isActive4,
            "sort": sorted,
            "event": events4
        }
    ]

    
    const [items, setItems] = useState(['Norte', 'Centro', 'Sur'])
    // const filterEvenResults = setItems(items.filter(x => x % 2))

    return (
        <div className={styles.wrapper}>
            {
                items.map(tag =>
                    <FilterButton key={tag} click={filterEvenResults} myClass={styles.li}>
                        {tag}
                    </FilterButton>
                )
            }
        </div>
    )
}

export default Filter
