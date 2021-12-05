import React, {useContext} from 'react';
import {Link, useHistory} from "react-router-dom";
import AuthContext from "../contexts/authContext";
import authAPI from "../config/services/authAPI";
import {gql, useQuery} from "@apollo/client";
import {FAV} from "../config/graphql/requests-front";

const id = window.localStorage.getItem("id");
const username = window.localStorage.getItem("username");
// console.log(id)

function Header() {
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
  const history = useHistory()

  const handleDisconnect = () => {
    authAPI.logout()
    setIsAuthenticated(false)
    history.replace('/')
    refetch()
  }


  return (
    <>
      <div className="container-fluid" id="top-nav">
        <div className="wrapper d-flex justify-content-center justify-content-md-between">
          <div className="our-social d-none d-md-flex">
            Our social :
            <ul>
              <li><a href="">fb.</a></li>
              <li><a href="">yt.</a></li>
              <li><a href="">fb.</a></li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light" id="navigation">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Books</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to='/'>Home</Link>
              <Link to='/books' className="">All Books</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
