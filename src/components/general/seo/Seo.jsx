import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({ title, desc, canonical, ogTitle, ogDesc, ogUrl, ogImage, hashTag }) => {
    return (
        <Helmet>
            <meta name="description"
                content={desc} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Y tú qué planes?" />
            <meta property="og:description"
                content={ogDesc} />
            <meta property="fb:admins" content="100002348994943" /> 
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={hashTag} />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:description"
                content={ogDesc} />
            <meta name="twitter:image" content={ogImage} />

            <link rel="preconnect" href={canonical} rel="canonical"></link>

            <title>{title}</title>
        </Helmet>
    )
}

Seo.defaultProps = {
    title: 'Título',
    desc: 'Descripción',
    canonical: 'Canonical Url',
    ogTitle: 'Título Og',
    ogDesc: 'Descripción Og',
    ogUrl: 'Url Og',
    ogImage: 'Imagen Og'
};

export default Seo
