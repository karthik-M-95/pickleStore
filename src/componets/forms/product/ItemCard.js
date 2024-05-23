import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './productStyle.css'

export default function ItemCard(props){

   
    return(

              
<>
<div class="card" style={{width:250,padding:5,marginTop:20}}>
  <img class="card-img-top" src={props.val.productUrl} alt="Card image cap" className='rounded' style={{height:200}}/>
  <div class="card-body">
    <h5 class="card-title">{props.val.productName}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={`/product/${props.val.productId}`} > 
                    <Button className="w-100 btn btn-lg card-button" variant="primary">View Product</Button>
                    </Link>
  </div>
</div>
</>
    
    )
}