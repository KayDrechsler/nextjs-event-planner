import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import styles from './event-item.module.scss';

const EventItem = (props) => {
    const { id, title, image, date, location } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={styles['item']}>
            <img src={'/' + image} alt={title} className={styles['image']} />
            <section className={styles['content']}>
                <div className={styles['summary']}>
                    <h2 className={styles['title']}>{title}</h2>
                    <ul>
                        <li className={styles['date']}>
                            <DateIcon />
                            <time dateTime={date}>{humanReadableDate}</time>
                        </li>
                        <li className={styles['address']}>
                            <AddressIcon />
                            <p>{formattedAddress}</p>
                        </li>
                    </ul>
                </div>
                <div className={styles['actions']}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles['icon']}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </section>
        </li>
    );
};

export default EventItem;