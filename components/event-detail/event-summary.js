import styles from './event-summary.module.scss';

const EventSummary = (props) => {
    const { title } = props;

    return (
        <section className={styles['summary']}>
            <h1 className={styles['headline']}>{title}</h1>
        </section>
    );
}

export default EventSummary;