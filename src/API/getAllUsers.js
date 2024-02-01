import axios from 'axios';
import { DEFAULT_URL, USERS_ENDPOINT } from '../constants/urls';

export const getAllUsers = () => {
    return axios.get(`${DEFAULT_URL + USERS_ENDPOINT}`);
};