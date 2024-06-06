import styles from './comment-list.module.scss';

function CommentList() {
    return (
        <ul className={styles.comments}>
            {/* Render list of comments - fetched from API */}
            <li className={styles['list-item']}>
                <p className={styles['paragraph']}>My comment is amazing!</p>
                <div className={styles['author']}>
                    By <address className={styles['address']}>Kay</address>
                </div>
            </li>
            <li className={styles['list-item']}>
                <p className={styles['paragraph']}>My comment is amazing!</p>
                <div className={styles['author']}>
                    By <address className={styles['address']}>Kay</address>
                </div>
            </li>
        </ul>
    );
}

export default CommentList;