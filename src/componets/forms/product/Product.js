import { useState, useEffect } from "react";
import NonVegProduct from "./NonVegProduct";
import VegProduct from "./VegProduct";
import { Button, Spinner } from "react-bootstrap";
import axios from "axios";
import './productStyle.css'


function GrowExample() {
    return <>
    <div className="about-us">
    <Spinner animation="border" />
    </div>      
    </>
  }

function ProductDisplay(props){
    

    const[vegProduct,setVegProduct]=useState(props.product);
    const[nonVegProduct,setNonVegProduct]=useState();
    
    useEffect(()=>{
        let filteredProduct=props.product.filter((x)=>x.productCategory==='non-veg')
        setNonVegProduct(filteredProduct);
        filteredProduct=props.product.filter((x)=>x.productCategory==='veg')
        setVegProduct(filteredProduct)
    },[])

    return(
        <>
             <VegProduct product={vegProduct} />
            <div className="p-1 bg-success w-100"></div>
            <NonVegProduct product={nonVegProduct} />
            {/* <div class="p-1 bg-success w-100"></div> */}

        </>
    )
}

export default function Product(){
    
    const[data,setData]=useState([])
    useEffect(()=>{
        
       
        axios.get('https://karthik-fake-repository.onrender.com/products').then((res)=>{
            setData(res.data);            
        }).catch(error=>console.log(error))
                
        },[])


    return(
        <>  
        {data.length ? <ProductDisplay product={data}/> : <GrowExample />}
          </>
        
    )
}