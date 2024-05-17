import axios from "axios";
import { useEffect, useState } from "react";
import MobileView from "../view/MobileView";
import TableleView from "../view/TabletView";
import DesktopView from "../view/DesktopView";



export default function VegProduct(){
    const [view, setView] = useState(window.innerWidth);
    const[data,setData]=useState([]);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1024)
    const [isTablet, setTablet] = useState(window.innerWidth > 750 && window.innerWidth < 1024)
    const [isMobile, setMobile] = useState(window.innerWidth < 650)
 
    const updateMedia = () => {
        setDesktop(window.innerWidth>1024);
        setTablet(window.innerWidth>768 && window.innerWidth<1024);
        setMobile(window.innerWidth <768);
 
    }
    useEffect(()=>{
        axios.get('http://localhost:4000/products').then((res)=>{
            let filteredProduct=res.data.filter((x)=>x.productCategory==='veg')
            setData(filteredProduct)
        }).catch(error=>console.log(error))
    },[])

    useEffect(() => {
        window.addEventListener('resize', updateMedia)
        return () => window.removeEventListener('resize', updateMedia)
    }, [window.innerWidth])
    
    useEffect(() => {}, [data])
      
    return(
        <>
        
        <div className="itemBase">
            <div className="row carousel-cover">
                <div className="col-sm-12  productLevel1">
                    <h5 className="cardJusitfy" key='veg'>Veg Pickles</h5>
                </div>

                {data ? 
            <div>
                <div id="carouselExampleControls-veg" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
           
                    {isMobile && <MobileView id={'veg'} val={data}/>}
                    {isTablet && <TableleView id={'veg'}  val={data} /> }
                    {isDesktop && <DesktopView id={'veg'}  val={data} />}

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-veg" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-veg" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
    
        
            </div>
            :<div>
         <p></p>
        </div>
}
        </div>
        </div>
        </>
    )
}