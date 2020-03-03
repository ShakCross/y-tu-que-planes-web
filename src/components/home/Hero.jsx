import React from 'react'
import styles from './hero.module.scss'
import HeroContent from 'components/general/hero-content/HeroContent'

const Hero = ({title, desc, responsive, image, image_lg, image_sm, logo, breadcrumbs, content, slug, location, chip}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.shadow}></div>
            <HeroContent 
                title={title} 
                desc={desc} 
                responsive={responsive}
                logo={logo} 
                image={image} 
                image_lg={image_lg}
                image_sm={image_sm}  
                breadcrumbs={breadcrumbs} 
                content={content} 
                slug={slug}
                location={location}
                chip={chip}
            />
        </div>
    )
}

Hero.defaultProps = {
    location: 'Lima'
};

export default Hero
