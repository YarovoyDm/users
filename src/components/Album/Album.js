import styles from './Album.module.scss';

const Album = ({title}) => {
    return (
        <div className={styles.album}>{title}</div>
    )
};

export default Album;