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

  const { loading, error, data, refetch } = useQuery(FAV, {
    variables:{ id }
  })

  console.log(data, "Header")
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

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

          <div className="log-wrapper">
            {isAuthenticated &&
            <>
              <span className="ms-3">Welcome back,{username}!</span>
              <span onClick={handleDisconnect} className="ms-3 logout">Logout</span>
            </>
            }
            {!isAuthenticated &&
            <button className="ms-3 logout" data-bs-toggle="modal" data-bs-target="#modal-login">Login</button>
            }
            {!isAuthenticated &&
            <button className="ms-3 logout" data-bs-toggle="modal" data-bs-target="#modal-register">Register</button>
            }
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
              <Link to='/blog' className="">Blog</Link>
              <Link to='/books' className="">All Books</Link>
              {isAuthenticated &&
              <Link to='/mybooks' className="">
                My books
                <span className="fa-layers fa-fw">
									<i className="fas fa-heart fa-1x"></i>
									<span className="fa-layers-counter">{data.users[0].favorites.length}</span>
							  	</span>
              </Link>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
