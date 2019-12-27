import React from 'react'
import { Route } from 'react-router-dom'
import Findeano from './pages/Findeano'
import Home from './pages/Home'

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Findeano} />
            <Route exact path='/home' component={Home} />
        </>

    )
}

export default Routes
