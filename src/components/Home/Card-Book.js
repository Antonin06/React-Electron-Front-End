import React from 'react';
import {API_URL} from "../../config/environement/dev";
import {Link} from "react-router-dom";

function CardBook(props) {
	return (
		<Link to={`/book/${props.id}`} className="card-book d-block" key={props.id}>
			<img src={`${API_URL}${props.thumbnail.url}`} className="card-img-top" alt="..."/>
			<div className="card-body text-center">
				<Link to={`/category/${props.categories[0].id}`} className="category-link">{props.categories[0].name}</Link>
				<h2 className="card-title text-center">{props.title}</h2>
			</div>
			{/*<span className="read-more">Lire plus</span>*/}
		</Link>
	);
}

export default CardBook;
