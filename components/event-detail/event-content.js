import styles from './event-content.module.scss';

const EventContent = (props) => {
    return (
        <section className={styles['content']}>
            {props.children}
        </section>
    );
}

export default EventContent;
