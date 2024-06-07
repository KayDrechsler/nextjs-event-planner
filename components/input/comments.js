import { useState, useEffect, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import NotificationContext from '../../store/notification-context';
import styles from './comments.module.scss';

const Comments = (props) => {
    const { eventId } = props;

    const notificationCtx = useContext(NotificationContext);

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [isFetchingComments, setIsFetchingComments] = useState(false);

    useEffect(() => {
        if (showComments) {
            setIsFetchingComments(true);
            fetch(`/api/comments/${eventId}`)
                .then(response => response.json())
                .then(data => {
                    setComments(data.comments);
                    setIsFetchingComments(false);
                });
        }
    }, [showComments]);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    const addCommentHandler = (commentData) => {
        notificationCtx.showNotification({
            title: 'Sending comment...',
            message: 'Your comment is currently being stored into a database',
            status: 'pending',
        });

        fetch(`/api/comments/${eventId}`, {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return response.json().then((data) => {
                    throw new Error(data.message || 'Something went wrong!');
                });
            })
            .then((data) => {
                notificationCtx.showNotification({
                    title: 'Success!',
                    message: 'Your comment was saved',
                    status: 'success',
                });
            })
            .catch((error) => {
                notificationCtx.showNotification({
                    title: 'Error!',
                    message: error.message || 'Something went wrong',
                    status: 'error',
                })
            });
    };

    return (
        <section className={styles.comments}>
            <button onClick={toggleCommentsHandler} className={styles['comments-button']}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} eventId={eventId} />}
            {showComments && !isFetchingComments && <CommentList items={comments} />}
            {showComments && isFetchingComments && <p>Loading...</p>}
        </section>
    );
};

export default Comments;