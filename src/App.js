import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/rooms" component={Rooms} exact></Route>
        <Route path="/rooms/:slug" component={SingleRoom} exact></Route>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
