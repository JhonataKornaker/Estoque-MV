import styles from './Calibracao.module.css';

function Calibracao() {

    const data = [
        {
            id: 1,
            equipamento: 'Megometro',
            fabricante: 'Minipa',
            modelo: 'MI2705',
            serial: '111111',
        },
        {
            id: 2,
            equipamento: 'Alicate Amperimetro',
            fabricante: 'Hioki',
            modelo: 'CM4505',
            serial: '222222',
        }
    ]

    return (
        <section>
            <table className={styles.container}>
                <thead>
                    <tr>
                        <th>Equipamento</th>
                        <th>Fabricante</th>
                        <th>Modelo</th>
                        <th>Numero de Serie</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.equipamento}</td>
                            <td>{item.fabricante}</td>
                            <td>{item.modelo}</td>
                            <td>{item.serial}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Calibracao;