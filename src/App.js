import React, { useState, Fragment } from "react";
import axios from "axios"

import Navbar from "./components/Navbar"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import UserGrid from "./components/UserGrid"
import Search from "./components/Search"
import Alert from "./components/Alert"
import About from "./components/About"
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const searchUsers = async (text) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/search/users` +
      `?q=${text}` +
      `&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
      `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setLoading(false);
    setUsers(response.data.items);
  };

  const clearUsers = () => {
    setLoading(false);
    setUsers([]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/" render={props => {
              return (<Fragment>
                <Search searchCall={searchUsers} clearCall={clearUsers} showClear={users.length > 0} setAlert={setAlert} />
                <UserGrid users={users} loading={loading} />
              </Fragment>);
            }} />
            <Route exact path="/about" render={About} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
