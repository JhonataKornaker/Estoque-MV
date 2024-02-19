import styles from './Titulo.module.css';

function Titulo ({children}) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Titulo;