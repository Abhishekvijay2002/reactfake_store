
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productcard({item}) {
  return (
    <Card className='custom-card'>
      <Card.Img variant="top" src={item?.image} className='product-image'/>
      <Card.Body className="card-body">
        <div>
        <Card.Title>{item?.title.slice(0,18)}</Card.Title>
        <Card.Text className='card-text text-muted'>
        {item?.description.slice(0,70)}
        </Card.Text>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
        <span className='bold fw-bold'>${item?.price}</span>
        <Button variant="primary">view Details</Button>
        </div>
      </Card.Body>
    </Card>

  )
}

export default Productcard
