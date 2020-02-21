import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.jsx';
import { HashRouter } from 'react-router-dom'
import Scroll from 'Scroll'

ReactDOM.render( <HashRouter><Scroll/><App/></HashRouter> , document.getElementById('root'))