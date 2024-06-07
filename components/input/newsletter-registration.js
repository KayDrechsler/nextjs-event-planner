import { useRef } from 'react';

import styles from './newsletter-registration.module.scss';

function NewsletterRegistration() {
    const emailInputRef = useRef();

    function registrationHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;

        fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify({ email: enteredEmail }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };

    return (
        <section className={styles.newsletter}>
            <h2 className={styles['newsletter-headline']}>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={styles.control}>
                    <input
                        type='email'
                        id='email'
                        ref={emailInputRef}
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