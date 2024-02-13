import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample(props) {
  

  
  
  return (

    <Card className='card-container'>
     {props.imageSrc && <Card.Img className='card-image'variant="top" src={props.imageSrc} alt='Card Image'/>}
      <Card.Body>
      { props.title && <Card.Title className='card-title'>{props.title}</Card.Title>}
       {props.description && <Card.Text className='card-description'>
         {props.description}
        </Card.Text>}
        {props.price && <p className='card-price'>{props.price}</p>}
        <Button variant="primary" className='card-btn'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;