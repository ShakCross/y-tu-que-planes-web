import React, { useState, useEffect, Children } from 'react'
import styles from './filter.module.scss'

const FilterButton = ({ click, myClass, children }) => {




    // const tags = [
    //     {
    //         "name": "Todos",
    //         "handleIsActive": handleIsActive1,
    //         "isActive": isActive1
    //     },
    //     {
    //         "name": "Norte",
    //         "handleIsActive": handleIsActive2,
    //         "isActive": isActive2
    //     },
    //     {
    //         "name": "Centro",
    //         "handleIsActive": handleIsActive3,
    //         "isActive": isActive3
    //     },
    //     {
    //         "name": "Sur",
    //         "handleIsActive": handleIsActive4,
    //         "isActive": isActive4
    //     }
    // ]

    //     const some = () =>{
    //         console.log('some');
    //     }
    //     const some2 = () =>{
    //         console.log('some2');
    //     }

    //    const onClick = () => {
    //         some();
    //         some2();
    //     }

    {/* <div onClick={click} key={tag.name}>
<div onClick={tag.handleIsActive} className={`${styles.li} ${tag.isActive ? styles.is_active : ''}`}>
    {tag.name}
</div>
</div> */}

    return (
        <div className={styles.ul} >
            <div onClick={click} className={myClass}>
                {children}
            </div>
        </div>
    )
}

export default FilterButton
