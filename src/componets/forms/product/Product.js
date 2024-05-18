import NonVegProduct from "./NonVegProduct";
import VegProduct from "./VegProduct";


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