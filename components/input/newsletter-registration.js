import styles from './newsletter-registration.module.scss';

function NewsletterRegistration() {
    function registrationHandler(event) {
        event.preventDefault();

        // fetch user input (state or refs)
        // optional: validate input
        // send valid data to API
    }

    return (
        <section className={styles.newsletter}>
            <h2 className={styles['newsletter-headline']}>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={styles.control}>
                    <input
                        type='email'
                        id='email'
                        className={styles['control-input']}
                        placeholder='Your email'
                        aria-label='Your email'
                    />
                    <button className={styles['newsletter-button']}>Register</button>
                </div>
            </form>
        </section>
    );
}

export default NewsletterRegistration;