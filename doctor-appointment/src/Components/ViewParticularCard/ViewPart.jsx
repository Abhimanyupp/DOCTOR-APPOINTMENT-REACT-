import React, { useEffect, useState } from 'react'
import './ViewPart.css'
import { useParams } from 'react-router-dom'

// import { base_url } from '../../baseUrl'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import { MDBBtn, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import WorkingD from '../WorkingDays/WorkingD'
import Reviewss from '../Reviewss/Reviewss'




function ViewPart() {
  const [viewIdDetails, setIdDetails] = useState([])

  const base_url = `http://localhost:3001/doctors`
  const { id } = useParams()
  console.log(id);

  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/${id}`)
    console.log(data);
    setIdDetails(data)
  }
  console.log(viewIdDetails);
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      {
        viewIdDetails ?
          <Row className='g-0'>

            <Col>
              {
             <img className='mt-5 pt-4 m-2' style={{width:'100%'}} src={viewIdDetails.image_url} alt="" />

              }
            </Col>
      


            <Col style={{padding:'50px',margin:'5px' }}>

            <MDBListGroup style={{ minWidth: '22rem' }} light>
             
      <MDBListGroupItem active noBorders aria-current='true' className='px-3'>
      <h1> {viewIdDetails.name}</h1>
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
        Speciality: <span style={{fontSize:'30px'}}> {viewIdDetails.specialty}</span> 
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
       Hospital: <span style={{fontSize:'30px'}}> {viewIdDetails.hospital}:</span>  
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
        Phone No: <span style={{fontSize:'30px'}}>{viewIdDetails.phone}</span> 
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
        Address: <span style={{fontSize:'23px'}}> {viewIdDetails.address}</span>    
      </MDBListGroupItem>

      <MDBListGroupItem noBorders className='px-3'>
       Hours: <span style={{fontSize:'30px'}}>{viewIdDetails.available_hours}</span> 
      </MDBListGroupItem>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <MDBListGroupItem noBorders className='' >
      <p className='p-2'><WorkingD wrk={viewIdDetails.available_days}/></p>
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='' style={{display:'flex',justifyContent:'space-evenly'}}>
      <p className='p-2 btn-danger'><Reviewss rev={viewIdDetails.reviews}/></p>
      </MDBListGroupItem>

      </div>
     
    </MDBListGroup>
            </Col>
          </Row> : <p>Data Not Found</p>
      }
    </div>
  )
}

export default ViewPart