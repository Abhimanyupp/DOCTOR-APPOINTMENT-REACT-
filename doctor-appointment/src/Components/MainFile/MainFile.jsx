import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ViewCard from '../ViewCard/ViewCard'
import Carousel from 'react-bootstrap/Carousel';
import { base_url } from '../../baseUrl'


function MainFile() {

  const[doctor,setDoctor]=useState([])

  const fetchData=async()=>{
    const {data}=await axios.get(`${base_url}/doctors`)
    console.log(data);
    setDoctor(data)
  }
  console.log(doctor);
  useEffect(()=>{

    fetchData()
},[])
  return (

    <div>
    

      
    <Carousel>
      <Carousel.Item>
        <img style={{width:'100%',height:'650px'}} src='https://images.pexels.com/photos/5327649/pexels-photo-5327649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' text="First slide" />
        <Carousel.Caption>
          <h1 className='text-warning'>WELCOMES YOU</h1>
          <p className='text-success'>All doctors treat, but a good doctor lets nature heal.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
              <img style={{width:'100%',height:'650px'}} src='https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' text="First slide" />

        <Carousel.Caption>
          <h1  className='text-warning'>Better Treatment</h1>
          <p className='text-success'>Physicians do a lot for a patient when they give his disease a name., consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
               <img style={{width:'100%',height:'650px'}} src='https://images.pexels.com/photos/4386492/pexels-photo-4386492.jpeg' text="First slide" />
 
        <Carousel.Caption>
          <h1  className='text-warning'>Best Doctors</h1>
          <p className='text-success'>
          Foolish the doctor who despises the knowledge acquired by the ancients.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {
      doctor?

<Row className='g-0'>
{
  doctor.map((item)=>(
<Col>
{
<ViewCard  doctor={item}/>
}

</Col>

  ))
}

</Row>:<p>No data</p>

    }
    

    </div>
    
  )
}

export default MainFile