import React from 'react'
import { Route } from 'react-router-dom'
import Home from 'pages/Home'
import Destinos from 'pages/Destinos'

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path='/destinos' component={Destinos} />
        </>

    )
}

export default Routes
