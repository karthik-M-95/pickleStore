import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import MobileView from "../view/MobileView";
import TableleView from "../view/TabletView";
import DesktopView from "../view/DesktopView";

export default function NonVegProduct(){

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
    useEffect(() => {
        window.addEventListener('resize', updateMedia)
        return () => window.removeEventListener('resize', updateMedia)
    }, [window.innerWidth])
    
    
    useEffect(() => {}, [view]);

    useEffect(()=>{
        axios.get('http://localhost:4000/products').then((res)=>{
            let filteredProduct=res.data.filter((x)=>x.productCategory==='non-veg')
            setData(filteredProduct)
        }).catch(error=>console.log(error))
                
            },[])
            
    return(

        <>
        <div className="itemBase">
            <div className="row carousel-cover">
                <div className="col-sm-12  productLevel1">
                    <h5 className="cardJusitfy">Non Veg Pickles</h5>
                </div>

        <div id="carouselExampleControls-non-veg" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div>
            {isMobile && <MobileView id={'non-veg'}  val={data}/>}
            {isTablet && <TableleView id={'non-veg'}  val={data} /> }
            {isDesktop && <DesktopView id={'non-veg'}  val={data} />}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-non-veg" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-non-veg" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
        </div>
        

        </div>
        </div>
        </>
    )
}