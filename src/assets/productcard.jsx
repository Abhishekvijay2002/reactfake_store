
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productcard({item}) {
  return (
    <Card className='custom-card'>
      <Card.Img variant="top" src={item?.image} className='product-image'/>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{item?.title.slice(0,20)}</Card.Title>
        <Card.Text className='card-text text-muted'>
        {item?.description.slice(0,90)}
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
        <span className='bold fw-bold'>${item?.price}</span>
        <Button variant="primary">view Details</Button>
        </div>
      </Card.Body>
    </Card>

  )
}

export default Productcard
