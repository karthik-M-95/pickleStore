import './Str.css'
export default function Ouritems()
{
    return(

<>
<div style={{display:'flex'}}><img src="https://bing.com/th?id=OSK.058506e365ca9eaabe2c6ed36bc849bf" style={{width:300 ,height:200 ,marginTop:60,marginLeft:110}}>
</img>
<h1 style={{marginTop:60,marginLeft:40}}>MangoPickle              
  <h1 style={{marginLeft:20}}>(Aavakaya)</h1></h1>
  <br></br>
  
</div>

<div style={{marginLeft:450,marginTop:-50}}>
<p>Made from authentic Indian spices</p>
<form action="">
<input type='radio' id="250gm" name="fav_language" value="250gm"></input><label htmlFor="250gm" style={{marginLeft:5}}><div></div><img src="https://bing.com/th?id=OSK.058506e365ca9eaabe2c6ed36bc849bf"style={{width:60,height:40 ,marginTop:-2,marginLeft:2}}></img><span style={{marginLeft:5}}>Mango Pickle (Avakaya) – 250gm</span></label><br></br><br></br>
<input type='radio' id="500gm" name="fav_language" value="500gm"></input><label htmlFor="500gm" style={{marginLeft:5}}><div></div><img src="https://bing.com/th?id=OSK.058506e365ca9eaabe2c6ed36bc849bf"style={{width:60,height:40 ,marginTop:-2,marginLeft:2}}></img><span style={{marginLeft:5}}>Mango Pickle (Avakaya) – 500gm</span></label><br></br><br></br>
<input type='radio' id="1kg" name="fav_language" value="1kg"></input><label htmlFor="1kg" style={{marginLeft:5}}><div></div><img src="https://bing.com/th?id=OSK.058506e365ca9eaabe2c6ed36bc849bf"style={{width:60,height:40 ,marginTop:-2,marginLeft:2}}></img><span style={{marginLeft:5}}>Mango Pickle (Avakaya) – 1kg</span></label><br></br><br></br>

<div style={{display:'flex'}}>
<input type="number" id="quantity" name="quantity" min="1" max="5" ></input>
<button type="button" class="btn btn-success" style={{marginLeft:50}}>AddCart<i class="bi bi-chevron-compact-right"></i></button>
<button type="button" class="btn btn-danger"style={{marginLeft:10}}>BuyNow<i class="bi bi-chevron-double-right"></i></button>

  </div></form>
<div>

</div>
  
</div></>
    )
}