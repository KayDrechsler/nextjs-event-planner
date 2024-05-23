import styles from './error-alert.module.scss';

const ErrorAlert = (props) => {
    return <div className={styles.alert}>{props.children}</div>;
}

export default ErrorAlert;
