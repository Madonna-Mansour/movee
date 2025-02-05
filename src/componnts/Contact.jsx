import React from 'react'
import phone from '../imges/phone white.png'
import email from '../imges/email white.png'
import linkedin from '../imges/linked in white.png'
import github from '../imges/github.png'

import {Col ,Row , Container} from 'react-bootstrap'


const Contact = () => {
    
  return (

  <Container fluid className='darkk'>
        <Row>
            <Col lg={12} className='text-contact'>
                    <p style={{color:"gray", fontSize:"25px" , marginBottom:"50px"}}>|| Get Latest Updates</p>
                    <h1 style={{ fontSize:"55px" , marginBottom:"50px"}}>Subscribe For Newsletter</h1>
                <div className="">
                    <input type="text" placeholder='Madonna Mansour Helmy' />
                    <button> <a href="https://github.com/Madonna-Mansour"> Subscribe Now</a> </button>                </div>
            </Col>
        </Row>
        <Row className='footerr'>
        <Col lg={3}>
                <div className=" butt-contact">
                     <button>
                        <img src={phone} alt="" />
                    </button>
                    <h1>01067514330</h1>
                </div>
         </Col>
         <Col lg={6}>
            <div className=" butt-contact">
                <button>
                    <img src={email} alt="" />
                </button>
                <h1>madonnamansour57@gmail.com</h1>            
                </div>
         </Col>
         <Col lg={3} className='git'>
                 <a href="https://www.linkedin.com/in/madonna-mansour-helmy-93a0a020a/"> <img src={linkedin} alt="" /></a>
                 <a href="https://github.com/Madonna-Mansour"> <img src={github} alt="" /></a>

         </Col>
        </Row>
  </Container>
     
    
  )
}

export default Contact