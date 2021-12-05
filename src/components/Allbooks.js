import React from 'react';
import {useQuery} from "@apollo/client";
import {BOOKS} from "../config/graphql/requests-front";
import {Redirect} from "react-router-dom";
import CardBook from "../components/Home/Card-Book";
// import Loading from "../components/Loading";


function AllBooks() {
  const { loading, error, data } = useQuery(BOOKS)

  if (loading) return <p>Loading</p>
  if (error) return <Redirect to="/error" />
  console.log(data, "BOOOOOOK")
  console.table(data.books )

  return (
    <section id="books" className="bg-primary pb-5">
      <h1 className="section-title py-5 text-center">Our Books</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 gx-5" >
          {data.books.map(book => (
            <div className="col-md-3 col-sm-6">
              <CardBook {...book}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllBooks;
