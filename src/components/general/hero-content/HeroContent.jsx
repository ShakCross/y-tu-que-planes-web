import React from "react";
import styles from './hero-content.module.scss'
import Breadcrumbs from 'components/general/breadcrumbs/Breadcrumbs'


const HeroContent = ({title, desc, image, breadcrumbs, content, slug}) => {

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
                        {
                            breadcrumbs ? 
                            <Breadcrumbs content={content} slug={slug} />
                            : ''
                        }
                    </div>
                </div>
                <img className={styles.slides} src={image} alt="" />
            </div>
        </div>
    )
}

HeroContent.defaultProps = {
    title: 'Turismo Comunitario',
    desc: 'Un Perú no solo debes conocerlo sino también vivirlo, recorriendo paisajes naturales que son capaces de hablar por si solos'
};

export default HeroContent