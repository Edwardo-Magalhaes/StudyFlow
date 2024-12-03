import styles from './Menu.module.css'
import { VscDebugStart } from "react-icons/vsc";
import { FaFolder } from "react-icons/fa";
import { LuPaperclip } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <nav className={styles.menu}>
            <div className={styles.opçoes}>
                <Link to="/Inicio"><div className={styles.icones}><VscDebugStart/></div>Inicio</Link>
                <Link to="/Planos"><div className={styles.icones}><FaFolder/></div>Planos</Link>
                <Link to="/Edital"><div className={styles.icones}><LuPaperclip/></div>Edital</Link>
                <Link to="/Cronograma"><div className={styles.icones}><SlCalender /></div>Cronograma</Link>
            </div>
        </nav>
    )
}

export default Menu