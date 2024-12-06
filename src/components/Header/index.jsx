import styles from './Header.module.css';
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>StudyFlow</h1>
            <nav className={styles.nav}>
                <Link to="/" className={styles.icon}>
                    <IoMdNotifications />
                </Link>
                <Link to="/" className={styles.icon}>
                    <CgProfile />
                </Link>
            </nav>
        </header>
    );
}

export default Header;
