import React from 'react';
import {Link} from "react-router-dom";
import {API_URL} from "../../config/environement/dev";
import moment from "moment";

function Card(props) {
	return (
		<Link to={`/articles/${props.id}`} className="card-post d-block" key={props.id}>
			<img src={`${API_URL}${props.thumbnail.url}`} className="card-img-top" alt="..."/>
			<div className="card-body py-2 px-0">
				<span className="date">{moment(props.created_at).format('DD. MMM. YYYY')}</span>
				<h2 className="card-title">{props.title}</h2>
				<span className="excerpt">{props.excerpt}</span>
			</div>
		</Link>
	);
}

export default Card;
