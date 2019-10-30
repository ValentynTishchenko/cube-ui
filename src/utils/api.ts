import axios from 'axios';

const login = (email, password) => {
  console.log(email, password);
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
};

const fetchUsers = (userType) => {
  console.log('userType: ', userType);
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
};

const createTest = (userIds) => {
  console.log('userIds: ', userIds);
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
};

const createUser = (userIds) => {
  console.log('userIds: ', userIds);
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
};
const api = {
  login,
  fetchUsers,
  createTest,
  createUser,
};


export default api;