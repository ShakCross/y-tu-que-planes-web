import React from 'react'
import { Route } from 'react-router-dom'
import Home from 'pages/Home'
import Destinos from 'pages/Destinos'
import Blog from 'pages/Blog'
import Rutas from 'pages/Rutas'
import Ofertas from 'pages/Ofertas'

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path='/ofertas' component={Ofertas} />
            <Route path='/destinos' component={Destinos} />
            <Route path='/rutas-cortas' component={Rutas} />
            <Route path='/blog-viajero' component={Blog} />
        </>

    )
}

export default Routes
