import{Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './nav.css'

export default function Navigator(){

    return(
        <div>
            <div className="bg-secondary" style={{ height:50}}>
            <marquee style={{color:'white', marginTop:8}}> welcome to Andhra spicy pickle store .</marquee>
            </div>
                <Navbar  collapseOnSelect expand="sm" bg="pink" data-bs-theme="light" style={{justifyContent:'center'}}>
                <Container className="nav-style nav-align nav-font" style={{justifyContent:'center'}} >
                    
                        <Nav style={{marginLeft:-30}}>             
                        <Navbar.Brand href="/"><img src="https://i.pinimg.com/originals/fe/90/a8/fe90a8637556b82d18b18938eaefbbdd.jpg" alt="" width="150" height="60" className="d-inline-block align-text-top" />
                        </Navbar.Brand>
                        </Nav>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav-align justify-content-center m-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Ouritems">Our Items </Nav.Link> 
                            <Nav.Link as={Link} to="/aboutus">About US</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse> 
                </Container>
                </Navbar>
                       
        </div>
    )
}