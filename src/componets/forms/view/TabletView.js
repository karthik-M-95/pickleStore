// import { useState } from "react"
import ItemCard from "../product/ItemCard"

const Carousel=(props)=>{
    // const[data, setData]=useState(props.val)
    let prodarr=props.val;
    
    return(
        <>
        
            <div className="carousel-item">
                <div className="card-wrapper container-sm d-flex   justify-content-around">
                {prodarr && prodarr.map((product)=>{
                        return <ItemCard key={product.id} val={product} /> 
                })
            }  
                </div>
            </div>      
        
        </>       
    )
}


export default function TabletView(props){

    var data=props.val;
    // const[data, setData]=useState(props.val);
    // useEffect(()=>{
    //     setData(props.val)
    // },[props])
    
  
    return(
        <>
        {/* <div id="#carouselExampleControls-veg" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner"> */}
                <div className="carousel-item active">
                <div className="card-wrapper container-sm d-flex  justify-content-around">
                
                {data && data.slice(0,2).map((product)=>{
                                return <ItemCard key={product.id} val={product} />
                            })}


                </div>
                </div>
            
                
               {data && <Carousel val={data.slice(2,4)} />}
               {data.slice(4).length>0 && <Carousel val={data.slice(4)} />}
            

            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-tablet" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-tablet" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>  */}
    
        </>
    )
}