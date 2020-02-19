import React from 'react'
import { Route } from 'react-router-dom'
import Home from 'pages/Home'
import Single from 'pages/Single'

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Home} /> 
            {/* <Route exact path='/ofertas-fin-de-ano' component={Findeano} /> */}
            <Route path='/single' component={Single} />
        </>  
    )
}

export default Routes
