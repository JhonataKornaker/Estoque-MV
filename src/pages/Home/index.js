import Calibracao from '../../component/Calibracao';
import Cards from '../../component/Cards';
import Header from '../../component/Header';
import Rastreio from '../../component/Rastreio';
import styles from './Home.module.css';

function Home () {

    const dados = [
        {
            id: 1,
            obra: 'Aparecida III',
            letra: 'A',
            sm: 'Lucas Keide',
        },
        {
            id: 2,
            obra: 'Aparecida do Taboado',
            letra: 'AT',
            sm: 'Carlos',
        },
        {
            id: 3,
            obra: 'Aloandia',
            letra: 'AL',
            sm: 'Rodrigo',
        },
        {
            id: 4,
            obra: 'Guaratingueta',
            letra: 'G',
            sm: 'Cristiano',
        },
    ]

    return (
        <>
        <Header/>
        <Calibracao/>
        <Rastreio />
        <h2 style={{textAlign: 'center', marginBottom: 16}}>
            Obras Ativas
        </h2>
        <section className={styles.container}>
        {dados.map((item) => 
            <Cards {...item} key={item.id} />
        )}
        </section>
        </>
    )
};

export default Home;