export default function Funcionarios() {
  return (
    <div>
      <h1>Funcionários</h1>
      <table style={{ width: '100%', background: 'white', marginTop: '20px', borderRadius: '8px', padding: '10px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Nome</th>
            <th style={{ textAlign: 'left' }}>Cargo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João Silva</td>
            <td>Desenvolvedor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
