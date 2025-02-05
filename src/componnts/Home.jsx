import React from 'react'
import {Col ,Row , Container,Button} from 'react-bootstrap'
import download from '../imges/download.png'
import me from '../imges/me.png'
import Madonna from '../componnts/Madonna.pdf'

const Home = () => {
  return (
        <Container fluid className='hero-section '>
           <Row className='d-flex align-items-center justify-content-center'>
             <Col lg={6} sm={6}  xs={6}  className='px-5'>
                 <h1  className='py-3' style={{fontSize:"90px" }}>Hello! I’m <br /> Madonna Mansour</h1>
                 <p style={{ color:"gray",fontSize:"40px"  }} >Front End Developer</p>
                 <button  variant="success" to="ContactPage" className='butt'>
                    <div className="">
                      <a href={Madonna} download='Madonna' className='text-white' style={{textDecoration:"none"}} >Download CV 
                      < img style={{height:"30px", marginLeft:"20px"}} src={download} alt="" />
                      </a>    
                     </div> 
                 </button>
             </Col>
             <Col lg={6} sm={12} xs={12}>
                  <img  src={me} alt="" id='me'  className='w-100' style={{height:"950px", width:"40px"}} />
             </Col>
           </Row>
        </Container> 
  )
}

export default Home
