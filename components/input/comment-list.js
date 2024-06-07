import styles from './comment-list.module.scss';

function CommentList({ items }) {
    return (
        <ul className={styles.comments}>
            {/* Render list of comments - fetched from API */}
            {items.map(comment => (
                <li key={comment._id} className={styles['list-item']}>
                    <p className={styles['paragraph']}>{comment.text}</p>
                    <div className={styles['author']}>
                        By <address className={styles['address']}>{comment.name}</address>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CommentList;