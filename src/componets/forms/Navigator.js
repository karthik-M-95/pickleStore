import{Link, Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './nav.css'

export default function Navigator(){

    return(
        <div>
            <Navbar  collapseOnSelect expand="sm" bg="pink" data-bs-theme="light" style={{justifyContent:'center'}}>
                {/* <div  style={{display:'flex',gap:40}}>  style={{marginLeft:90.,marginTop:30}}*/}
                    {/* <div style={{marginLeft:30}}><img class="img-fluid rounded mx-auto my-4" loading="lazy" src="https://www.sharmispassions.com/wp-content/uploads/2021/11/instant-mango-pickle1.jpg" width="200" height="80" alt="Dosa Logo" style={{borderRadius:100,marginLeft:30}}/>
</div> */}
                <Container className="nav-style nav-align nav-font" style={{justifyContent:'center'}} >
                    
                        <Nav className="justify-content-left me-auto">             
                        <Navbar.Brand href="#home"><img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" width="100" height="50" className="d-inline-block align-text-top" />
                        </Navbar.Brand>
                        </Nav>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav"  className="">
                    
                    
                        <Nav className="nav-align justify-content-center m-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Ouritems">Our Items </Nav.Link> 
                            <Nav.Link as={Link} to="/aboutus">About US</Nav.Link> 
                        </Nav>
{/* 
                        <Nav className="justify-content-end ">
                        <Nav.Link href="#">Cart</Nav.Link>
                        <Nav.Link href="/home">Active</Nav.Link>
                                         <div style={{marginLeft:100,marginTop:30}}> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>     </div>    
                        </Nav> */}
                   
                    </Navbar.Collapse>
                   
                </Container>
                </Navbar>
                       
                <Outlet />
        </div>
    )
}