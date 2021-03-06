import axios from 'axios';
const baseUrl = 'http://localhost:8000/user'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

const register = obj => {
	const request = axios.post(`${baseUrl}/register`,obj)
	return request.then(response => {
		return response.data
	})
}

const login = obj => {
	const request = axios.post(`${baseUrl}/login`,obj)
	return request.then(response => {
		return response.data
	})
}

const getAll = obj => {
	const request = axios.post(`${baseUrl}/orders`,obj)
	console.log(obj)
	return request.then(response => {
		return response.data
	})
}

const getAll2 = obj => {
	const request = axios.post(`${baseUrl}/orders2`,obj)
	console.log(obj)
	return request.then(response => {
		return response.data
	})
}

const getId = (id, obj) => {
	const request = axios.post(`${baseUrl}/orders/${id}`,obj)
	return request.then(response => {
		return response.data
	})
}

const addUser = (obj) => {
	const request = axios.post(`${baseUrl}/register`, obj)
	return request.then(response => {
		return response.data
	})
}

const placeOrder = (obj) => {
	const request = axios.post(`${baseUrl}/addOrder`, obj)
	return request.then(response => {
		return response.data
	})
}

const getPrice = (obj) => {
	const request = axios.post(`${baseUrl}/price`, obj)
	return request.then(response => {
		return response.data
	})
}

const getWarehouse = (id, obj) => {
	const request = axios.post(`${baseUrl}/warehouse/${id}`, obj)
	return request.then(response => {
		return response.data
	})
}

export default {register, login, getAll, getAll2, getId, addUser, placeOrder, getPrice, getWarehouse};