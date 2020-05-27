import React from 'react'
import { Helmet } from 'react-helmet'
import ClanOffc from 'assets/fonts/ClanOffc-Medium.ttf';
import BreeLight from 'assets/fonts/BreePeru_Light.otf';
import Bree from 'assets/fonts/BreePeru_Regular.otf';
import ClanOffcBold from 'assets/fonts/ClanOffc-Bold.ttf';
import ClanOffcNews from 'assets/fonts/ClanOffc-News.ttf';
import ClanOffcLight from 'assets/fonts/ClanOffc-Thin.ttf';
import ClanOffcBook from 'assets/fonts/ClanOffc-Book.ttf';

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
            <style>
                {`
                    @font-face {
                        font-family: 'ClanOffc';
                        src: url('${ClanOffc}');
                        font-display: swap;
                    }
                    @font-face {
                        font-family: 'BreePeruLight';
                        src: url('${BreeLight}');
                        font-display: swap;
                    }
                    
                    @font-face {
                        font-family: 'BreePeru';
                        src: url('${Bree}');
                        font-display: swap;
                    }
                    
                    @font-face {
                        font-family: 'ClanOffcBold';
                        src: url('${ClanOffcBold}');
                        font-display: swap;
                    }
                    
                    @font-face {
                        font-family: 'ClanOffcNews';
                        src: url('${ClanOffcNews}');
                        font-display: swap;
                    }
                    
                    @font-face {
                        font-family: 'ClanOffcLight';
                        src: url('${ClanOffcLight}');
                        font-display: swap;
                    }
                    
                    @font-face {
                        font-family: 'ClanOffcBook';
                        src: url('${ClanOffcBook}');
                        font-display: swap;
                    }
                `
                }
            </style>
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
