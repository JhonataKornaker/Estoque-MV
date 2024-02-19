import styles from './Calibracao.module.css';

function Calibracao() {

    const dados = [
        {
            id: 1,
            equipamento: 'Megometro',
            fabricante: 'Minipa',
            modelo: 'MI2705',
            serial: '111111',
            data: '10/02/24',
            localizacao: 'Aparecida III'
        },
        {
            id: 2,
            equipamento: 'Alicate Amperimetro',
            fabricante: 'Hioki',
            modelo: 'CM4505',
            serial: '222222',
            data: '15/02/24',
            localizacao: 'Guara'
        }
    ]

    return (
        <section className={styles.container}>
            <h2>Calibração!</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Equipamento</th>
                        <th>Fabricante</th>
                        <th>Modelo</th>
                        <th>Numero de Serie</th>
                        <th>Localização Atual</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item) => (
                        <tr key={item.id}>
                            <td>{item.data}</td>
                            <td>{item.equipamento}</td>
                            <td>{item.fabricante}</td>
                            <td>{item.modelo}</td>
                            <td>{item.serial}</td>
                            <td>{item.localizacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Calibracao;