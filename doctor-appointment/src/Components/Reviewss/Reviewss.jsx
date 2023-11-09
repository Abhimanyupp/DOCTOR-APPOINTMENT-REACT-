import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Reviewss({rev}) {
 console.log(rev);
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);


 return (
    <div>
 <Button variant="primary" onClick={handleShow}>
      Reviews
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1>Reviews</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {
            rev?.map((item)=>(
                <><p><span className='text-dark'>Patient Name:</span> {item?.patient_name}</p>
                <p><span className='text-dark'>Date:</span> {item?.date}</p>
                <p><span className='text-dark'>Rating:</span> {item?.rating} <i style={{color:'yellow'}} class="fa-solid fa-star fa-beat fa-sm" ></i></p>
                <p><span className='text-dark'>Comments:</span> {item?.comments}</p></>
            ))
        }
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default Reviewss