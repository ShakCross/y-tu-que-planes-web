import React from 'react'
import Layout from 'components/layout/Layout'
import Parallax from 'components/home/Parallax'
import Festividades from 'components/home/Festividades'
import Blog from 'components/home/Blog'
import Ofertas from 'components/home/Ofertas'
import Hero from 'components/home/Hero'

const Home = () => {
    return (
            <Layout>
                <Hero/>
                <Blog/>
                <Ofertas/>
                <Festividades/>
                <Parallax/>
            </Layout>
    )
}

export default Home

// import React from "react";
// import Australia from "@svg-maps/australia";
// import { SVGMap } from "react-svg-map";
// // import "react-svg-map/lib/index.css";
 
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
 
//   render() {
//     return <SVGMap map={Australia} />;
//   }
// }

// export default App
