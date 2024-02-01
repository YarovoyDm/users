import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet-async';
import { getAllUsers } from '../../API';
import { updateUsers, selectAllUsers } from '../../store/reducers/usersReducer';
import User from '../../components/User/User';
import { SORT_USERNAME_KEY, ASC, DESC, SORT, SORT_LOCAL_STORAGE_KEY } from '../../constants/sort';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import styles from './Users.module.scss';

const sortByKey = (array, key, order) => {
    return [...array].sort((a, b) => {
      const comparison = a[key].localeCompare(b[key]);
      return order === ASC ? comparison : -comparison;
    });
};

const AllUsers = () => {
    const dispatch = useDispatch();
    const { getItemFromLocalStorage, setItemInLocalStorage } = useLocalStorage(SORT_LOCAL_STORAGE_KEY);
    const allUsers = useSelector(selectAllUsers);
    const [usernameInput, setUsernameInput] = useState('');
    const [sortOrder, setSortOrder] = useState(() => {
        const sortFromLocalStorage = getItemFromLocalStorage();

        return sortFromLocalStorage || ASC;
    });
    const sortedArray = useMemo(() => sortByKey(allUsers, SORT_USERNAME_KEY, sortOrder), [allUsers, sortOrder]);

    useEffect(() => {
        const fetchUsers = async() => {
            const response = await getAllUsers().then(res => res.data);

            dispatch(updateUsers(response));
        };

        fetchUsers();
    }, []);

    const toggleSortOrder = () => {
        const getSortType = sortOrder === ASC ? DESC : ASC;
        
        setSortOrder(getSortType);
        setItemInLocalStorage(getSortType);
    };

    const onUsernameChange = (e) => {
        setUsernameInput(e.target.value)
    };

    const sortByName = () => {
        dispatch(updateUsers(sortedArray));
        toggleSortOrder();
    };

    const usersRender = useCallback(() => {
        const filteredUsers = sortedArray.filter((user) => user.username.toLowerCase().includes(usernameInput.toLowerCase()));

        return filteredUsers.map(({username, name, id, email}) => {
            return <User key={id} username={username} name={name} email={email} userId={id}/>
        })
    }, [usernameInput, sortedArray]);

    return (
        <main className={styles.usersWrapper}>
            <Helmet>
                <title>Posts</title>
                <meta name='description' content='Unleash your creativity and join a thriving online community of user posts on our website, where you can express yourself and connect with others' />
                <link rel='canonical' href='/'/>
            </Helmet>
            <div className={styles.users}>
                <h1>All users in one place</h1>
                <div onClick={sortByName} className={styles.sort}>Click here to change ({SORT[sortOrder]})</div>
                <input value={usernameInput} onChange={onUsernameChange} placeholder='Start typing a username...' className={styles.usernameInput}/>
                {usersRender()}
            </div>
        </main>
    )
};

export default AllUsers;