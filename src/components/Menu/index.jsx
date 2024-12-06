import React, { useContext } from 'react';
import { MenuContext } from '../Menu/MenuContext';
import styles from './Menu.module.css';
import { VscDebugStart } from "react-icons/vsc";
import { FaFolder } from "react-icons/fa";
import { LuPaperclip } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

function Menu() {
    const { isExpanded, toggleMenu } = useContext(MenuContext);

    return (
        <nav className={`${styles.menu} ${isExpanded ? styles.expanded : styles.collapsed}`}>
            <button onClick={toggleMenu} className={styles.toggleButton}>
                <IoMdMenu />
            </button>
            <div className={styles.options}>
                <Link to="/Inicio">
                    <div className={styles.icon}><VscDebugStart /></div>
                    {isExpanded && "Início"}
                </Link>
                <Link to="/Planos">
                    <div className={styles.icon}><FaFolder /></div>
                    {isExpanded && "Planos"}
                </Link>
                <Link to="/Edital">
                    <div className={styles.icon}><LuPaperclip /></div>
                    {isExpanded && "Edital"}
                </Link>
                <Link to="/Cronograma">
                    <div className={styles.icon}><SlCalender /></div>
                    {isExpanded && "Cronograma"}
                </Link>
            </div>
        </nav>
    );
}

export default Menu;
