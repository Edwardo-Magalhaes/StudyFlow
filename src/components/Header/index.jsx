import styles from './Header.module.css'
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/" className={styles.icone}><IoMdMenu/></Link>
            
            <span>StudyFlow</span>
            <nav>
                <div className={styles.icones}>
                    <Link to="/" className={styles.icone}><IoMdNotifications/></Link>
                    <Link to="/" className={styles.icone}><CgProfile/></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header