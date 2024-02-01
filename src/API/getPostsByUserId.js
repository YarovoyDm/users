import axios from 'axios';
import { DEFAULT_URL, USERS_POSTS_BY_ID_URL } from '../constants/urls';

export const getPostsByUserId = (userId) => {
    return axios.get(`${DEFAULT_URL + USERS_POSTS_BY_ID_URL + userId}`);
};