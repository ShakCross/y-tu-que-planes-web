import React from 'react'
import { Route } from 'react-router-dom'
import Home from 'pages/Home'
// import Destinos from 'pages/Destinos'
import Blog from 'pages/Blog'
// import Rutas from 'pages/Rutas'
import Ofertas from 'pages/Ofertas'
import OfertasSingle from 'pages/OfertasSingle'

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path='/ofertas' component={Ofertas} />
            <Route path='/ofertas-interna' component={OfertasSingle} />
            <Route path='/blog-viajero' component={Blog} />
            {/* {data.map(post =>
                <Route key={post.id} exact path={'/' + post.slug} component={Single} />
            )}*/}
            {/* <Route path='/destinos' component={Destinos} />
            <Route path='/rutas-cortas' component={Rutas} />
             */}
        </>

    )
}

export default Routes
