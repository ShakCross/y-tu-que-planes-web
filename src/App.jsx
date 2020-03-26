import React from "react";
import Routes from 'routes'
import 'styles/global.scss'
import 'styles/reset.scss'
import { Switch } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Routes />
    </Switch>
  );
}

export default App;
