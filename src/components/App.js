import React , {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {API_URL_APOLLO} from "../config/environement/dev";
import AuthContext from "../contexts/authContext";
import authAPI from "../config/services/authAPI";

import Home from "./Home";
import Header from "./Header";
import '../assets/scss/App.scss'
import 'bootstrap';
import Footer from "./Footer";

const client = new ApolloClient({
  uri: API_URL_APOLLO,
  cache: new InMemoryCache()
})

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated)

  useEffect(() => {
    authAPI.setup()
    authAPI.isAuthenticated()
  })


  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      <div id="app">
        <Router>
          <ApolloProvider client={client}>
            <Header/>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
            <Footer/>
          </ApolloProvider>
        </Router>
      </div>
    </AuthContext.Provider>
  )
}

export default App
