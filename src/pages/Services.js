import Table from 'react-bootstrap/Table';

function Services() {
  return (
    <div className="container-lg">
      <div className='row text-center'>
        <div className='col mt-3'>
          <h1>Services</h1>
        </div>
      </div>
      <Table striped='columns' bordered hover>
        <thead>
          <tr className='text-center'>
            <th></th>
            <th>Gestion Imax</th>
            <th>Gestion Marché</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Gestion maintenance</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Gestion locative</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Tarifs</th>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default Services;