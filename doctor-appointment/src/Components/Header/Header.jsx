import React from 'react'
import './Header.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand  href='#'>
          <i class="fa-solid fa-user-doctor fa-beat fa-lg"></i>
            <span className='ms-2 titlenav'>Doctor Here</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header