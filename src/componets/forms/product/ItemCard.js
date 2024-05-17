import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './productStyle.css'

export default function ItemCard(props){

   
    return(

              
        <Col className='card-wrapper container-sm d-flex  justify-content-around'>
                <Card key={props.val.productId} className="cardBorder" style={{ width: '18rem' }}>
                <Card.Body >
                    <Card.Title className="cardJusitfy">{props.val.productName}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Img className="cardImage" src={props.val.productUrl} variant="top" />
                    <Card.Text className='card-description'>Price : {props.val.productPrice} / kg               </Card.Text>
                    <Link to={`/product/${props.val.productId}`} > 
                    <Button className="w-100 btn btn-lg card-button" variant="primary">View Product</Button>
                    </Link>
                    
                    
                </Card.Body>
                
                </Card>
        </Col>
    
    )
}