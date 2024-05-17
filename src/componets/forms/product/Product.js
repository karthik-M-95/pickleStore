import { useEffect, useState } from "react";
import NonVegProduct from "./NonVegProduct";
import VegProduct from "./VegProduct";
import axios from "axios";

const ViewSize=()=>{

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      useEffect(() => {
        const handleResize = () => {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };

        window.addEventListener('resize', handleResize);

    })

    return()=>{

    }
}

export default function Product(){
    

    return(
        <>
            <VegProduct />
            <div className="p-1 bg-success w-100"></div>
            <NonVegProduct />
            {/* <div class="p-1 bg-success w-100"></div> */}
        </>
        
    )
}