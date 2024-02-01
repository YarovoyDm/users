import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsByUserId } from '../../API';
import { updateUserAlbums, selectAllUserAlbums } from '../../store/reducers/usersReducer';
import Album from '../../components/Album/Album';
import Loading from '../../components/Loading/Loading';

import styles from './Albums.module.scss';

const Albums = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const allAlbums = useSelector(selectAllUserAlbums);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAlbums = async() => {
            setIsLoading(true);
            const response = await getAlbumsByUserId(userId).then(res => res.data);

            dispatch(updateUserAlbums(response));
            setIsLoading(false);
        };

        fetchAlbums();
        
    }, []);

    const albumsRender = useCallback(() => {
        return allAlbums.map(({id, title}) => {
            return <Album key={id} title={title} />
        })
    }, [allAlbums]);

    return (
        <main className={styles.albumsWrapper}>
            <Helmet>
                <title>Albums</title>
                <meta name='description' content='Capture and relive your favorite memories with our user albums - the perfect platform to showcase your personal photo collection' />
            </Helmet>
            {isLoading ? <Loading /> : <div className={styles.albums}><h1>Discover user albums for free</h1>{albumsRender()}</div>}
        </main>
    )
};


export default Albums;