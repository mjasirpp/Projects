import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { searchRestaurant } from '../redux/RestaurantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <>
      <Navbar style={{zIndex:'1'}} className="bg-info position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand>
           <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
            <i class="fa-solid fa-list"></i>
                Restaurant Listing
           </Link>
          </Navbar.Brand>
          <div className="d-flex ms-auto align-items-center">
            <input onChange={(e)=>dispatch(searchRestaurant(e.target.value))} type="text" className='form-control px-5 rounded' placeholder='Search Restaurant' />
            <i className="fa-solid fa-search" style={{marginLeft:'-35px',color:'black'}}></i>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header