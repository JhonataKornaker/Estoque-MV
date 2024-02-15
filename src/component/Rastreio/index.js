import styles from './Rastreio.module.css';

function Rastreio () {
        const data = [
            {
                id: 1,
                equipamento: 'Megometro',
                fabricante: 'Minipa',
                modelo: 'MI2705',
                serial: '111111',
                localizacaoAtual: 'Aparecida III',
                ultimaLocalizacao: 'Marajoara'
            },
            {
                id: 2,
                equipamento: 'Alicate Amperimetro',
                fabricante: 'Hioki',
                modelo: 'CM4505',
                serial: '222222',
                localizacaoAtual: 'Guara',
                ultimaLocalizacao: 'Aloandia'
            }
        ]
    
        return (
            <section className={styles.container}>
                <h2>Ultimas Movimentações</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Equipamento</th>
                            <th>Fabricante</th>
                            <th>Modelo</th>
                            <th>Numero de Serie</th>
                            <th>Localização Anterior</th>
                            <th>Localização Atual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.equipamento}</td>
                                <td>{item.fabricante}</td>
                                <td>{item.modelo}</td>
                                <td>{item.serial}</td>
                                <td>{item.ultimaLocalizacao}</td>
                                <td>{item.localizacaoAtual}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
    )
}

export default Rastreio;