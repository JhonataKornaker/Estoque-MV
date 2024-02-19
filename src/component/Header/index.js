import styles from './Header.module.css';
import logo from './imgMvpower.png';


function Header () {
    return(
        <header className={styles.container}>
            <h2>MV Power</h2>
        </header>
    )
}

export default Header;