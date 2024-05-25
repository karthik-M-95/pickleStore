import axios from "axios";
import { useEffect, useState } from "react";
import MobileView from "../view/MobileView";
import TabletView from "../view/TabletView";
import DesktopView from "../view/DesktopView";



export default function VegProduct(props){
    var data = props.product;
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024)
    const [isTablet, setTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024)
    const [isMobile, setMobile] = useState(window.innerWidth < 768)
 
    const updateMedia = () => {
        setDesktop(window.innerWidth>=1024);
        setTablet(window.innerWidth>=768 && window.innerWidth<1024);
        setMobile(window.innerWidth <768);
 
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia)
        return () => window.removeEventListener('resize', updateMedia)
    }, [])
    
      
    return(
        <>
       { data && 
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
                    {isTablet && <TabletView id={'veg'}  val={data} /> }
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
        }
        </>
    )
}