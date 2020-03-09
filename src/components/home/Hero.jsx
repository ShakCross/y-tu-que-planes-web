import React from 'react'
import styles from './hero.module.scss'
import Breadcrumbs from 'components/general/breadcrumbs/Breadcrumbs'
import HomeSlider from 'components/general/main-slider/HomeSlider'
import HeroContent from 'components/general/hero-content/HeroContent'
import data from 'data/slides.json'

const Hero = ({ home, title, desc, responsive, image, image_lg, image_sm, breadcrumbs, content, slug, logo }) => {
    return (
        <>
            <div className={`${home ? styles.wrapper_home : styles.wrapper}`}>
                <div className={`${home ? styles.shadow_home : styles.shadow}`}></div>
                {
                    home ?
                        <HomeSlider
                            autoplay
                            delayLength={6000}
                        >
                            {data.map(slide =>
                                <div key={slide.id} className={styles.home_slides}>
                                    <HeroContent 
                                        url={slide.url} 
                                        chip={slide.localia} 
                                        desc={slide.desc} 
                                        title={slide.titulo} 
                                    />
                                    <div className={styles.home_image_wrapper}>
                                        <img className={styles.home_image_lg} src={slide.imagen_lg} alt={slide.alt}/>
                                        <img className={styles.home_image_md} src={slide.imagen_md} alt={slide.alt}/>
                                        <img className={styles.home_image_xs} src={slide.imagen_xs} alt={slide.alt}/>
                                        <img className={styles.home_image_tall} src={slide.imagen_tall} alt={slide.alt}/>
                                    </div>
                                </div>
                            )}    
                        </HomeSlider>
                        :
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
                                                <img className={styles.logo} src={logo} alt="turismo-comunitario-logo" />
                                            </div>
                                    }
                                </div>
                            </div>
                            {responsive ?
                                <>
                                    <img className={styles.slides_lg} src={image_lg} alt="turismo-comunitario-banner" />
                                    <img className={styles.slides_sm} src={image_sm} alt="turismo-comunitario-banner" />
                                </>
                                :
                                <img className={styles.slides} src={image} alt="turismo-comunitario-banner" />
                            }
                        </div>
                }
            </div>
        </>
    )
}

export default Hero
