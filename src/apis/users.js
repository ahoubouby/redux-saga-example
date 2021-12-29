import axios from '../utils/axios';

export const getUsers = () => {
    return axios.get('users');
}

export const createUser = (user) => {
    return axios.post('users', user);
}

export const deleteUser = (id) => {
    return axios.delete(encodeURI(`users/${id}`));
}