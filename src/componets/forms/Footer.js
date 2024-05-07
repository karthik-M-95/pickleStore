import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer(){
    return(
       <>
      <footer class="bg-body-tertiary text-center text-white" style={{display:'flex',justifyContent:'center'}}>
      <div style={{marginRight:250}}>
        <div><h2 className='text-secondary'>Follow us</h2></div>
        <div> <div class="container p-4 pb-0">
      <section class="mb-4">
      <a href="https://www.facebook.com/profile.php?id=100016567898897"  data-mdb-ripple-init class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#3b5998"}} role="button" btn-secoundary>
            <i class="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/naveen__1718/?hl=en"  data-mdb-ripple-init class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#FF0000"}} role="button" btn-secoundary>
            <i class="bi bi-instagram"></i>
        </a>
        <a href="https://wa.me/8296591085"  data-mdb-ripple-init class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#00ff00"}} role="button" btn-secoundary>
            <i class="bi bi-whatsapp"></i>
        </a>
</section>
</div></div>
     </div>
     <div><h2 className='text-secondary'>Contact Us </h2>
     <section class="mb-4">
     <div style={{display:'flex'}}>
     <a href=""  data-mdb-ripple-init class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#000000"}} >
            <i class="bi bi-telephone"></i>
        </a>
        <h3 className='text-secondary' style={{marginTop:4}}><span>  +91 913789394, +91 9087489387</span></h3>
     </div>
     <div style={{display:'flex'}}>
     <a href="mailto:webmaster@example.com"  data-mdb-ripple-init class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#ff0000"}} >
           <i class="bi bi-google"></i>
        </a>
        <h3 className='text-secondary' style={{marginTop:4}}>gfshdvhgasvdjhvvvxj@gmail.com</h3>
     </div>
        </section>
     </div>

</footer>

       </>
    )
}