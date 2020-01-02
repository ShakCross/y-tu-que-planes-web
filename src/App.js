import React from "react";
import { hot } from "react-hot-loader/root";
import Routes from './routes'
import 'styles/global.scss'
import 'styles/normalize.scss'

function App() {
  return (
    <>
      <Routes/>
    </>
  );
}

export default hot(App);
