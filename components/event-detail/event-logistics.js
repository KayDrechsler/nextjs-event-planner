import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import styles from './event-logistics.module.scss';

const EventLogistics = (props) => {
    const { date, address, image, imageAlt } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const addressText = address.replace(', ', '\n');

    return (
        <section className={styles['logistics']}>
            <div className={styles['image-wrapper']}>
                <img src={`/${image}`} alt={imageAlt} className={styles['image']} />
            </div>
            <ul className={styles['list']}>
                <LogisticsItem icon={DateIcon}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <p className={styles['address']}>{addressText}</p>
                </LogisticsItem>
            </ul>
        </section>
    );
}

export default EventLogistics;
