export default function Report({student}) {
    return (
        <table>
            <thead>
                <tr>
                    <th className="border p-2"></th>
                    <th className="border p-2">2021</th>
                    <th className="border p-2">2022</th>
                    <th className="border p-2">2023</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="border p-2">Horas anuais</th>
                    <td className="border p-2">40</td>
                    <td className="border p-2">40</td>
                    <td className="border p-2">120</td>
                </tr>
                <tr>
                    <th className="border p-2">Horas concluídas</th>
                    <td className="border p-2">40</td>
                    <td className="border p-2">48</td>
                    <td className="border p-2">32</td>
                </tr>
                <tr>
                    <th className="border p-2">Atividades atribuídas</th>
                    <td className="border p-2">12</td>
                    <td className="border p-2">09</td>
                    <td className="border p-2">05</td>
                </tr>
                <tr>
                    <th className="border p-2">Atividades concluídas</th>
                    <td className="border p-2">12</td>
                    <td className="border p-2">11</td>
                    <td className="border p-2">05</td>
                </tr>
            </tbody>
        </table>
    )
}