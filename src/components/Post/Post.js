import styles from './Post.module.scss';

const Post = ({id, title, body}) => {
    return (
        <div className={styles.post} id={id}>
            <div className={styles.postTitle}>{title}</div>
            <div className={styles.postBody}>{body}</div>
        </div>
    )
};

export default Post;