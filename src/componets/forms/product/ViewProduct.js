import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './productStyle.css'



export default function ViewProduct(){

    let params=useParams();
    const[item,setItem]=useState({});
    const[product,setProduct]=useState({});
    // const pageloaded=()=>{
    //     console.log('page reloaded')
    //     setLoadData(!loadData)
    // }
    useEffect(()=>{
        axios.get(`http://localhost:4000/products?id=${params.productId}`).then(res=>{
            setItem(res.data[0]);  
        })
        .catch(error=>console.log(error))
        
    },[params.productId])

    useEffect(()=>{
        setProduct(item)
    },[item])


    return(
        <>
        <div  >
            <div  className="row viewProduct">

            <Card  style={{ width: '22rem' }}>
                <Card.Header>
                    <Card.Title className="cardJusitfy">{product.productName}</Card.Title>
                </Card.Header>
                <Card.Img id="viewProductImage" variant="top" alt={product.productName} src={product.productUrl} />
                <Card.Body>
                    
                    <Card.Text>
                   {product.productDescription}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>1/2 kg : {product.productPrice/2 +10} Rs </ListGroup.Item>
                    <ListGroup.Item>1 kg : {product.productPrice} Rs</ListGroup.Item>
                    {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                </ListGroup>
                <Card.Body>
                <Link to='https://wa.me/8296591085'> <Button className="w-100 btn btn-lg " value="Order" variant="primary">Order</Button>
                </Link>
                {/* <Button variant="primary">Go somewhere</Button> */}
                    
                </Card.Body>
            </Card>

                {/* <div className="col-sm-6">
                    <img src={product.productUrl} class="img-thumbnail cardImage" alt={product.productName} />
                </div>
                <div className="col-sm-6">
                <p>Hello</p>
                </div> */}

            </div>

        </div>

        </>
    )

}