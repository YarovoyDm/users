import { Link } from 'react-router-dom';

import styles from './User.module.scss';

const User = ({name, username, email, userId}) => {
    return (
        <div className={styles.user}>
            <div className={styles.userMainInfo}>
                <div className={styles.name}>{name}</div>
                <div className={styles.nickname}>@{username}</div>
            </div>
            <div className={styles.footer}>
                <div>{email}</div>
                <div className={styles.links}>
                    <Link to={`/user/${userId}/posts`}>Posts</Link>
                    <Link to={`/user/${userId}/albums`}>Albums</Link>
                </div>
            </div>
        </div>
    )
};

export default User;