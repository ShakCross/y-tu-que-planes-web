import React, { useState, Children } from 'react'
import styles from './filter.module.scss'
import FilterButton from 'components/general/filter/FilterButton'

const Filter = ({filter1, filter2, filter3, filter4}) => {

    const [isActive1, setIsActive1] = useState(false)

    const handleIsActive1 = () => {
        setIsActive1(true)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(false)
        filter1()
    }

    const [isActive2, setIsActive2] = useState(false)

    const handleIsActive2 = () => {
        setIsActive2(true)
        setIsActive1(false)
        setIsActive3(false)
        setIsActive4(false)
        filter2()
    }

    const [isActive3, setIsActive3] = useState(false)

    const handleIsActive3 = () => {
        setIsActive3(true)
        setIsActive1(false)
        setIsActive2(false)
        setIsActive4(false)
        filter3()
    }

    const [isActive4, setIsActive4] = useState(false)

    const handleIsActive4 = () => {
        setIsActive4(true)
        setIsActive1(false)
        setIsActive2(false)
        setIsActive3(false)
        filter4()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.ul}>
                <FilterButton content="Todos" click={handleIsActive1} active={isActive1} />
                <FilterButton content="Norte" click={handleIsActive2} active={isActive2} />
                <FilterButton content="Centro" click={handleIsActive3} active={isActive3} />
                <FilterButton content="Sur" click={handleIsActive4} active={isActive4} />
            </div>
        </div>
    )
}

export default Filter
