import React , {useEffect, useState} from "react";
import {BrowserRouter, BrowserRouter as Router, HashRouter, Route, Switch} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {API_URL_APOLLO} from "../config/environement/dev";
import AuthContext from "../contexts/authContext";
import authAPI from "../config/services/authAPI";

import Home from "./Home";
import Header from "./Header";
import '../assets/scss/App.scss'
import 'bootstrap';
import Footer from "./Footer";
import AllBooks from "./Allbooks";

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
        <HashRouter>
            <ApolloProvider client={client}>
              <Header/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/books" component={AllBooks} />
              </Switch>
              <Footer/>
            </ApolloProvider>
        </HashRouter>
      </div>
    </AuthContext.Provider>
  )
}

export default App
