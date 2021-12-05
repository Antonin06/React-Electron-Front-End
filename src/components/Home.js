import React from 'react';
import { useQuery, gql } from "@apollo/client";
import {API_URL} from "../config/environement/dev";
import {Link} from "react-router-dom";
import {HOME} from "../config/graphql/requests-front";
import Slick from "./Home/Slider";
import CardBook from "./Home/Card-Book";
import Card from "./Blog/Card";
import Newsletter from "./Home/Newsletter";
import {ReactComponent as Logo} from '../assets/images/intro.svg';
import intro from '../assets/images/intro.svg';


function Home() {

  const { loading, error, data } = useQuery(HOME)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)

  return (
    <div>
      <section id="intro">
        {/*<Logo/>*/}
        <img src={intro} className="img-fluid" alt={document.title}/>
        <div className="container">
          <div className="wrapper">
            <h1>{document.title}</h1>
            <p>Search, find your next book available in our store</p>
          </div>
        </div>
      </section>
      <section id="books" className="bg-secondary">
        <div className="container py-5 books">
          <span className="title-head">Nos derniers livres</span>
          <hr className="divider"/>
          <div className="row row-cols-1 row-cols-md-2 gy-5 mb-5">
            {data.books.map(book => (
              <div className="col-md-3 col-sm-6" key={book.id}>
                <CardBook {...book}/>
              </div>
            ))}
          </div>
          <div className="btn-wrapper">
            <Link to="/books" className="btn-custom">See All Books</Link>
          </div>
        </div>
      </section>
      <section id="blog" className="bg-primary py-5">
        <span className="title-head">Nos derniers articles</span>
        <hr className="divider"/>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gy-5 mb-5">
            {data.articles.map(post => (
              <div className="col-md-4 col-sm-6" key={post.id}>
                <Card {...post}/>
              </div>
            ))}
          </div>
          <div className="btn-wrapper">
            <Link to="/blog/" className="btn-custom">See All Articles</Link>
          </div>
        </div>
      </section>
      <Newsletter/>
    </div>
  );
}

export default Home;
