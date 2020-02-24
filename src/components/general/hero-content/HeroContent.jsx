import React from "react";
import styles from './hero-content.module.scss'
import Breadcrumbs from 'components/general/breadcrumbs/Breadcrumbs'


const HeroContent = ({ title, desc, responsive, image, image_lg, image_sm, breadcrumbs, content, slug, logo }) => {

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.heading__wrapper}>
                    <div className={styles.heading__inner_wrapper}>
                        <h1 className={styles.h1} >
                            {title}
                        </h1>
                        <span className={styles.span}>
                            {desc}
                        </span>
                        <div className={styles.logo_wrapper}>
                            <img className={styles.logo} src={logo} alt="" srcSet=""/>
                        </div>
                        {
                            breadcrumbs ?
                                <Breadcrumbs content={content} slug={slug} />
                                : ''
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
        </div>
    )
}

HeroContent.defaultProps = {
    title: 'Turismo Comunitario',
    desc: 'Un Perú no solo debes conocerlo sino también vivirlo, recorriendo paisajes naturales que son capaces de hablar por si solos'
};

export default HeroContent