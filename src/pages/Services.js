import Table from 'react-bootstrap/Table';

function Services() {
  return (
    <div className="container-lg">
      <div className='row text-center'>
        <div className='col mt-3'>
          <h1>Tarifs</h1>
        </div>
      </div>
      <Table striped='columns' bordered hover>
        <thead>
          <tr className='text-center'>
            <th></th>
            <th>Option 1</th>
            <th>Option 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>petit</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Moyen</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Grand</th>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default Services;