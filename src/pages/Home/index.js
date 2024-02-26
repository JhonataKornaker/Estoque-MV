import { Link } from 'react-router-dom';
import Calibracao from '../../component/Calibracao';
import Cards from '../../component/Cards';
import Rastreio from '../../component/Rastreio';
import Titulo from '../../component/Titulo';
import styles from './Home.module.css';


function Home() {

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
        {
            id: 5,
            obra: 'Araçoiaba da Serra',
            letra: 'AS',
            sm: 'Kayo',
        },
    ]

    return (
        <>
            <Calibracao />
            <Rastreio />
            <Titulo>
                Obras Ativas
            </Titulo>
            <Link className={styles.link_cards} to="/Obras">
                <section className={styles.container}>
                    {dados.map((item) =>
                        <Cards {...item} key={item.id} />
                    )}
                </section>
            </Link>
        </>
    )
};

export default Home;