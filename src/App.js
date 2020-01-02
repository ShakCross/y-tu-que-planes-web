import React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./app.module";
import jonpreece from "./images/jonpreece-square";
import Header from './components/Header/Header'
import 'styles/global.scss'
import 'styles/normalize.scss'

function App() {
  return (
    <>
      <Header/>
      {/* <img src={jonpreece} alt="Jon Preece" /> */}
      <h2 className={styles.red}>This is our React application!</h2>
    </>
  );
}

export default hot(App);
