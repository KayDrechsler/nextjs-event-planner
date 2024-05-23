import Link from "next/link";
import styles from './main-header.module.scss';

const MainHeader = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['logo']}>
                <Link href='/' className={styles['logo-link']}>NextEvents</Link>
            </div>
            <nav>
                <h2 className='sr-only'>Main Navigation</h2>
                <ul>
                    <li>
                        <Link href='/events' className={styles['navigation-link']}>Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default MainHeader;
