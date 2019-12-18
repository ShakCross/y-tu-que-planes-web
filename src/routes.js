import React from 'react'
import { Route } from 'react-router-dom'
import Findeano from './pages/Findeano'

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Findeano} />
            {/* <Route exact path='/pokemon' component={PokeListContainer} /> */}
        </>

    )
}

export default Routes
