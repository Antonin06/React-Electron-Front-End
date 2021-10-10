import {API_URL} from "./config/environement/dev";

export default async function FetchStrapi(uri, method, body = null ) {
	// console.log(comment)
	try {
		const response = await fetch(API_URL+ uri, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${localStorage.getItem("authToken")}`
			},
			body: body ? JSON.stringify(body) : null,
		})

		return await response.json();
	} catch(error) {
		console.error(error)
	}
}
