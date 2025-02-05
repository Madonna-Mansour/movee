import React from 'react'
import {Col ,Row , Container} from 'react-bootstrap'
import download from '../imges/download.png'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
  return (
    <div>
        <Container fluid  >
           <Row className='dark'>
                <Col  lg={6}> 
                    <h3 style={{fontSize:"25px" , color:"gray" , marginBottom:"50px"}}>|| Special Skills</h3>
                    <h1 style={{fontSize:"55px" }}>My Special Skill Field Here.
                    </h1>
                    
                </Col>
                <Col className='skill' lg={6}>
                     <div className="">
                     <div className="back">
                            <div className="desplay-skil">
                                <p>Communication</p>
                                <p>100%</p>
                            </div>
                            <ProgressBar animated now={100} />                        </div>
                        <div className="back">
                        <div className="desplay-skil">
                                <p>Leadership</p>
                                <p>100%</p>
                            </div>
                            <ProgressBar animated now={100} />
                        </div>
                        <div className="back">
                        <div className="desplay-skil">
                                <p>Teamwork</p>
                                <p>100%</p>
                            </div>
                            <ProgressBar animated now={100} />
                        </div>
                        <div className="back">
                        <div className="desplay-skil">
                                <p>Flexibility</p>
                                <p>100%</p>
                            </div>
                            <ProgressBar animated now={100} />
                        </div>

                     
                     </div>
                </Col>
            </Row>
        </Container>
          
    </div>
  )
}

export default Skills
