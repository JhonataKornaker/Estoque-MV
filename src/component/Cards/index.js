import styles from './Cards.module.css';

function Cards ({obra, letra, sm}) {
    return (
        <div className={styles.container}>
            <div className={styles.imagem}>
                <h1>{letra}</h1>
            </div>
            <h2>{obra}</h2>
            <h3>{sm}</h3>
        </div>
    )
}

export default Cards;