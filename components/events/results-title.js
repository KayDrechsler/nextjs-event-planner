import Button from '../ui/button';
import styles from './results-title.module.scss';

const ResultsTitle = (props) => {
    const { date } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });

    return (
        <section className={styles['title']}>
            <h1>Events in {humanReadableDate}</h1>
            <div className={styles['button-wrapper']}>
                <Button link='/events'>Show all events</Button>
            </div>
        </section>
    );
}

export default ResultsTitle;
