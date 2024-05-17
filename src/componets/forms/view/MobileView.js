import { useEffect, useState } from "react"
import ItemCard from "../product/ItemCard"

const Carousel=(props)=>{
    const[data, setData]=useState(props.val)
    return(
        <>
            <div className="carousel-item">
                <div className="card-wrapper container-sm d-flex   justify-content-around">
                {data &&   <ItemCard val={data} /> }
                </div>
            </div>       
        
        </>       
    )
}

export default function MobileView(props){
    const[data, setData]=useState();
    
    useEffect(()=>{
        setData(props.val);
    },[props])

   
    return(
        <>
        
                <div className="carousel-item active">
                <div className="card-wrapper container-sm d-flex  justify-content-around">
                
                {data && data.slice(0,1).map((product)=>{
                                return <ItemCard  val={product} />
                            })}

                </div>
                </div>
                
                
               {data && data.map((product)=>{
                    return <Carousel val={product} />
               })}
            

           
        </>
    )
}