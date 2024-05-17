import './productStyle.css'
import { useEffect, useState } from "react";
import axios from 'axios';


export default function ItemModel(){

    const[data,setData]=useState([]);
    const[product,setProduct]=useState([])
    useEffect(()=>{

        axios.get('http://localhost:4000/products').then((res)=>{
            setData(res.data)
            let filteredProduct=data.filter((x)=>x.productCategory==='non-veg')
            setProduct(filteredProduct);
            console.log(filteredProduct)
        })
        .catch(error=>console.log(error))
    },[])
    // console.log(data)
    return(
        <>
        {/* <div className="itemBase">
            <div className="row carousel-cover">
                <div className="col-sm-12  productLevel1">
                    <h5 className="cardJusitfy">Veg Pickles</h5>
                </div>

           
           

        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div class="card-wrapper container-sm d-flex  justify-content-around">
                
                {data && data.slice(0,3).map((product)=>{
                                return <ItemCard val={product} />
                            })}

                </div>
                </div>
                <div class="carousel-item">
                <div class="card-wrapper container-sm d-flex   justify-content-around">
                {data && data.slice(3,).map((product)=>{
                                return <ItemCard val={product} />
                            })}
                </div>
                </div>
            

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        

        </div>
        </div> */}
        </>
    )

    /* https://codepen.io/Devang-Mate/pen/yLKWboB 
 <div className="row">
               
                {data && data.map((product)=>{
                    return <ItemCard val={product} />
                })}
                
                </div>

*/

}

