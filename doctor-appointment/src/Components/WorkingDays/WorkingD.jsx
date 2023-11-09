import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function WorkingD({ wrk }) {
    console.log(wrk);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Working Days
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h1>WORKING DAYS</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MDBListGroup className='p-2' style={{ minWidthL: '22rem' }} light>
                        <MDBListGroupItem>{wrk?.[0]}</MDBListGroupItem>
                        <MDBListGroupItem>{wrk?.[1]}</MDBListGroupItem>
                        <MDBListGroupItem>{wrk?.[2]}</MDBListGroupItem>
                  
                    </MDBListGroup>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default WorkingD