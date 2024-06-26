import { useContext } from 'react';

import styles from './notification.module.scss';
import NotificationContext from '../../store/notification-context';

const Notification = (props) => {
    const notificationCtx = useContext(NotificationContext);

    const { title, message, status } = props;

    let statusClasses = '';

    if (status === 'success') {
        statusClasses = styles.success;
    }

    if (status === 'error') {
        statusClasses = styles.error;
    }

    if (status === 'pending') {
        statusClasses = styles.pending;
    }

    const activeClasses = `${styles.notification} ${statusClasses}`;

    return (
        <div className={activeClasses} onClick={notificationCtx.hideNotification}>
            <h2 className={styles['notification-headline']}>{title}</h2>
            <p>{message}</p>
        </div>
    );
}

export default Notification;