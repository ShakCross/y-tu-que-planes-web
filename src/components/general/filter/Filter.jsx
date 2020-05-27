import React, { useState } from 'react'
import styles from './filter.module.scss'
import FilterButton from 'components/general/filter/FilterButton'
import Slider from 'react-slick'

const Filter = ({ content1, content2, content3, content4, filter1, filter2, filter3, filter4 }) => {

    const settings = {
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 999999,
                settings: "unslick",
              },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    variableWidth: true,
                    speed: 400,
                    infinite: true,
                }
            }
        ]
    }

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
            <Slider className={styles.wrapper_desktop} {...settings}>
                <FilterButton content={content1} click={handleIsActive1} active={isActive1} className="filter_button" classNameActive="filter_button_active" />
                <FilterButton content={content2} click={handleIsActive2} active={isActive2} className="filter_button" classNameActive="filter_button_active" />
                <FilterButton content={content3} click={handleIsActive3} active={isActive3} className="filter_button" classNameActive="filter_button_active" />
                <FilterButton content={content4} click={handleIsActive4} active={isActive4} className="filter_button" classNameActive="filter_button_active" />
            </Slider>
            {/* <div className={styles.wrapper_desktop}>
                <FilterButton content={content1} click={handleIsActive1} active={isActive1} className="filter_button" classNameActive="filter_button_active" />
                <FilterButton content={content2} click={handleIsActive2} active={isActive2} className="filter_button" classNameActive="filter_button_active" />
                <FilterButton content={content3} click={handleIsActive3} active={isActive3} className="filter_button" classNameActive="filter_button_active" />
                <FilterButton content={content4} click={handleIsActive4} active={isActive4} className="filter_button" classNameActive="filter_button_active" />
            </div> */}
        </div>
    )
}

export default Filter
