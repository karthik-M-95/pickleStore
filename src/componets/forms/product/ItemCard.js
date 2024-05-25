import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './productStyle.css'

export default function ItemCard(props){

   
    return(

              
      <>
      <div className="card" style={{width:250,padding:5,marginTop:20}}>
        <img className="card-img-top rounded" src={props.val.productUrl} alt="Card image cap" style={{height:200}}/>
        <div className="card-body">
          <h5 className="card-title">{props.val.productName}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={`/product/${props.val.productId}`} > 
                          <Button className="w-100 btn btn-lg card-button" variant="primary">View Product</Button>
                          </Link>
        </div>
      </div>
      </>
    
    )
}