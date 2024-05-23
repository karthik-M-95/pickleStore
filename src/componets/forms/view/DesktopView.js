import ItemCard from "../product/ItemCard";

export default function DesktopView(props){

    var data=props.val;

    return(
        <>
         {/* <div id="carouselExampleControls-desktop" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner"> */}
                <div className="carousel-item active">
                <div className="card-wrapper container-sm d-flex  justify-content-around">
                
                {data && data.slice(0,3).map((product)=>{
                                return <ItemCard key={product.id} val={product} />
                            })}

                </div>
                </div>
                <div className="carousel-item">
                <div className="card-wrapper container-sm d-flex   justify-content-around">
                {data && data.slice(3,6).map((product)=>{
                                return <ItemCard key={product.id} val={product} />
                            })}
                </div>
                </div>
            
        </>
    )
}