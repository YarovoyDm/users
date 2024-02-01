import axios from 'axios';
import { DEFAULT_URL, USERS_ALBUMS_BY_ID_URL } from '../constants/urls';

export const getAlbumsByUserId = (userId) => {
    return axios.get(`${DEFAULT_URL + USERS_ALBUMS_BY_ID_URL + userId}`);
};