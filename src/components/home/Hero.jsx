import React from 'react'
import styles from './hero.module.scss'
import Breadcrumbs from 'components/general/breadcrumbs/Breadcrumbs'
import MainSlider from 'components/general/main-slider/MainSlider'

const Hero = ({ home, title, desc, responsive, image, image_lg, image_sm, breadcrumbs, content, slug, logo }) => {
    return (
        <>
            <div className={`${home ? styles.wrapper_home : styles.wrapper}`}>
                <div className={`${home ? styles.shadow_home : styles.shadow}`}></div>
                {
                    home ?
                        <MainSlider /> :
                        <div className={styles.inner_wrapper}>
                            <div className={styles.heading__wrapper}>
                                <div className={styles.heading__inner_wrapper}>
                                    <h1 className={styles.h1} >
                                        {title}
                                    </h1>
                                    <h2 className={styles.span}>
                                        {desc}
                                    </h2>
                                    {
                                        breadcrumbs ?
                                            <Breadcrumbs content={content} slug={slug} />
                                            :
                                            <div className={styles.logo_wrapper}>
                                                <img className={styles.logo} src={logo} alt="" srcSet="" />
                                            </div>
                                    }
                                </div>
                            </div>
                            {responsive ?
                                <>
                                    <img className={styles.slides_lg} src={image_lg} alt="" />
                                    <img className={styles.slides_sm} src={image_sm} alt="" />
                                </>
                                :
                                <img className={styles.slides} src={image} alt="" />
                            }
                        </div>
                }
            </div>
        </>
    )
}

export default Hero
