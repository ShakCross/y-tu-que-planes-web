import React from 'react'
import Destinos from './destinos/Destinos'
import Blog from './blog/Blog'
import Ofertas from './ofertas/Ofertas'
import Hero from './hero/Hero'

const Main = () => {
    return (
        <main>
            <Hero/>
            <Destinos/>
            <Blog/>
            <Ofertas/>
        </main>
    )
}

export default Main
