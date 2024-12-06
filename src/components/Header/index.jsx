import { useState } from "react";
import styles from './Header.module.css';
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";

function Header({ userName = "Usuário" }) {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const toggleNotifications = () => setShowNotifications(!showNotifications);
    const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);

    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <h1 className={styles.title}>StudyFlow</h1>
            </div>
            <div className={styles.centerSection}>
                <p className={styles.slogan}>Bem-vindo, {userName}</p>
            </div>
            <nav className={styles.nav}>
                <div className={styles.notificationWrapper}>
                    <button className={styles.iconButton} onClick={toggleNotifications}>
                        <IoMdNotifications className={styles.icon} />
                    </button>
                    {showNotifications && (
                        <div className={styles.notificationsBox}>
                            <h3>Notificações</h3>
                            <ul>
                                <li>Lembrete: Estudar Matemática às 14:00</li>
                                <li>Lembrete: Revisar Biologia às 16:00</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={styles.profileWrapper}>
                    <button className={styles.iconButton} onClick={toggleProfileMenu}>
                        <CgProfile className={styles.icon} />
                    </button>
                    {showProfileMenu && (
                        <div className={styles.profileMenu}>
                            <ul>
                                <li>Conta</li>
                                <li>Sair</li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
