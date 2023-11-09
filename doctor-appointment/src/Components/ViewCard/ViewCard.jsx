import React from 'react'
import { Col, Row } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import './ViewCard.css'
import { Link } from 'react-router-dom';



function ViewCard({doctor}) {
    console.log(doctor);
    
  return (
    <div>
        {
         doctor?
   <Link to={`view/${doctor.id}`}  style={{textDecoration:'none'}}>
   <div className='container mt-5 p-2'>
       <div className="row g-0">
       <Row>
           <Col>
           {
               
       <Card className='card' style={{ width: '300px',height:'540px',padding:'10px'}}>
       <Card.Img className='img' variant="top" src={doctor. image_url} />
       <Card.Body>
         <Card.Title>{doctor.name}</Card.Title>
         <Card.Text>
          Speciality:  {doctor.specialty}
         </Card.Text>
         <Card.Text>
          Hospital:  {doctor.hospital}
         </Card.Text>
         <Card.Text>
        Address:{doctor.address}
         </Card.Text>
       </Card.Body>
     </Card>
   }
           
           </Col>


       </Row>

       </div>
      
  
   </div>
   
   </Link>:<p>No data</p>

        }
     
      
   
    </div>
  )
}

export default ViewCard