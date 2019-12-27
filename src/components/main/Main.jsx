import React, { useRef } from 'react'
import Destinos from './destinos/Destinos'
import Blog from './blog/Blog'
import Ofertas from './ofertas/Ofertas'
import Hero from './hero/Hero'

const Main = () => {

    const ofertasRef = useRef();
    const handleClick = () => ofertasRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })

    return (
        <main>
            <Hero clicked={handleClick}/>
            <Destinos/>
            <Blog/>
            <Ofertas refered={ofertasRef}/>
        </main>
    )
}

export default Main
