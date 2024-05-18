import { Col, Row } from 'react-bootstrap'
import './productStyle.css'



export default function AboutUs(){

    return(
        <>
        <div className='about-us'>
            <Row>
                <Col className="cardJusitfy" sm={12}>
                    <img src='/about.jpg' alt='About our pickle store' style={{width:"300px", height:"400px"}} />   
                </Col>
                <Col sm={12}>
                    <h5 className="cardJusitfy">
                        Taste the delicious Andhra style pickle that is prepared the way it is prepared at home. 
                    </h5>
                </Col>
            </Row>
            

        </div>
        </>
    )
}