import{Link, Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navigator(){

    return(
        <div>
            <Navbar  collapseOnSelect expand="sm" bg="pink" data-bs-theme="light" style={{height:80}}>
                <div  style={{display:'flex',gap:40}}>
                    <div style={{marginLeft:30}}><img class="img-fluid rounded mx-auto my-4" loading="lazy" src="https://images.unsplash.com/photo-1601702538934-efffab67ab65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="200" height="80" alt="Dosa Logo" style={{borderRadius:100,marginLeft:30}}/>
</div>
                <Container className="nav-style" style={{marginLeft:90.,marginTop:30}}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Ouritems">Our Items
                         </Nav.Link> 
                        <Nav.Link href="#pricing">About US</Nav.Link>
                        <Nav.Link href="#pricing">Contact US</Nav.Link>
                        
                    </Nav>
                   
                    </Navbar.Collapse>
                </Container>
               <div style={{marginLeft:100,marginTop:30}}> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>     </div>           </div>
                </Navbar>
                <Outlet />
        </div>
    )
}