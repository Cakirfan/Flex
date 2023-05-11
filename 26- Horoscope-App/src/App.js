import React from "react"
// import './scss/_button.scss'
// import './scss/_reset.scss'
// import './scss/_variable.scss'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss"
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import dataa from "./data"
function App() {
  return (
    <div>
      <Header />
      <Card daten={dataa} />
    </div>
  );
}

export default App;
