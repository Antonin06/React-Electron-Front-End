import {URL_LOGIN, URL_REGISTER} from "../environement/dev";
import axios from 'axios';
import jwtDecode from "jwt-decode";

function authenticate(credentials) {
	return axios.post(URL_LOGIN, credentials)
		.then(res => res.data )
		.then(data => {
			window.localStorage.setItem("authToken", data.jwt)
			window.localStorage.setItem("username", data.user.username)
			window.localStorage.setItem("id", data.user.id)
			axios.defaults.headers["Authorization"] = "Bearer" + data.jwt
			// console.log(jwtDecode(data.jwt))
			// console.log(isAuthenticated())
			window.location.replace('/')
		})
}

function register(credentials) {
	return axios.post(URL_REGISTER, credentials)
		.then(res => res.data)
		.then(data => {
			window.localStorage.setItem("authToken", data.jwt)
			window.localStorage.setItem("username", data.user.username)
			window.localStorage.setItem("id", data.user.id)
			axios.defaults.headers["Authorization"] = "Bearer" + data.jwt
			// console.log(jwtDecode(data.jwt))
			// console.log(isAuthenticated())
		})
}

function isAuthenticated() {
	const token = window.localStorage.getItem("authToken")

	if (token) {
		const {exp} = jwtDecode(token)
		if (exp * 1000 > new Date().getTime()) {
			return true;
		}
	}
	return false;
}

function logout() {
	window.localStorage.removeItem("authToken")
	window.localStorage.removeItem("username")
	window.localStorage.removeItem("id")
	delete axios.defaults.headers["Authorization"];
}

function setup() {
	const token = window.localStorage.getItem("authToken")

	if (token) {
		const {exp} = jwtDecode(token)
		if (exp * 1000 > new Date().getTime()) {
			axios.defaults.headers["Authorization"] = "Bearer" + token
		}
	}
}

export default {
	authenticate,
	register,
	isAuthenticated,
	logout,
	setup
};
