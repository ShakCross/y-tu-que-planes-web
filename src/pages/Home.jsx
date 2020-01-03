import React from 'react'
import Layout from 'components/layout/Layout'
import Parallax from 'components/home/Parallax'
import Chip from 'components/general/chip/Chip'
import Button from 'components/general/button/Button'
import H2 from 'components/general/h2/H2'
import PlusLink from 'components/general/plus-link/PlusLink'

const Home = () => {
    return (
        <div>
            <Layout>
                <Chip filled/>
                <Button/>
                <H2/>
                <PlusLink title="+ 3 actividades"/>
                <Parallax/>
            </Layout>
        </div>
    )
}

export default Home
