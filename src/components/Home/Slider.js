import React from 'react';
import Slider from "react-slick";
import {API_URL} from "../../config/environement/dev";
import {SLIDER} from "../../config/graphql/requests-front";
import {useQuery} from "@apollo/client";
import {Link} from "react-router-dom";


function Slick() {
	const { loading: loading1, error: error1, data: data1 } = useQuery(SLIDER)

	const settings = {
		dots: true,
		infinite: true,
		// speed: 2000,
		// autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		customPaging: function(i) {
			return (
				<span className="pagination-custo">{i +1}</span>
			);
		},
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	};

	if (loading1) return <p>Loading...</p>
	if (error1) return <p>Error :(</p>
	console.log(data1)

	return (
		<div>
			<Slider {...settings}>
				{data1.books.map(book => (
					<div key={book.id} className="wrapper">
						<div className="img-wrapper">
							<img src={`${API_URL}${book.thumbnail.url}`} alt="" className="img-fluid img-slider" />
						</div>
						<div className="wrapper-info">
							<Link to={`/book/${book.id}`} className="title">{book.title}</Link>
								<Link to={`/book/${book.id}`} className="read-more">
									<span className="txt">
										Lire plus
									</span>
								</Link>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Slick;
