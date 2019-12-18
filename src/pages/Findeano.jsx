import React, { Component } from 'react'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'
import Main from 'components/main/Main'

export class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default Home
