import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { getPostsByUserId } from '../../API';
import { updateUserPosts, selectAllUserPosts } from '../../store/reducers/usersReducer';
import Loading from '../../components/Loading/Loading';
import Post from '../../components/Post/Post';

import styles from './Posts.module.scss';

const Posts = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const allPosts = useSelector(selectAllUserPosts);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async() => {
            setIsLoading(true);
            const response = await getPostsByUserId(userId).then(res => res.data);

            dispatch(updateUserPosts(response));
            setIsLoading(false);
        };

        fetchPosts();
        
    }, []);

    const postsRender = useCallback(() => {
        return allPosts.map(({id, title, body}) => {
            return <Post key={id} id={id} title={title} body={body}/>
        })
    }, [allPosts]);

    return (
        <main className={styles.postsWrapper}>
            <Helmet>
                <title>Posts</title>
                <meta name='description' content='Explore a vibrant community of user-generated content on our website, where you can find inspiration, knowledge, and entertainment.' />
            </Helmet>
            {isLoading ? <Loading /> : <div className={styles.posts}><h1>Discover user posts for free</h1>{postsRender()}</div>}
        </main>
    )
};

export default Posts;