import React from 'react'
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

const Layout = ({ children }) => {
    return (
        <main role="main">
            <Header empty/>
            {children}
            <Footer />
        </main>
    )
}

Layout.defaultProps = {
    children: '',
};

export default Layout
