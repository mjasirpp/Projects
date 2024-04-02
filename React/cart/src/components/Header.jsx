import React from 'react'
import { Container,Nav,Navbar,Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <Navbar style={{zIndex:'1'}} expand="lg" className="bg-body-tertiary position-fixed top-0 w-100 mb-5">
      <Container>
        <Navbar.Brand ><Link style={{textDecoration:'none',fontWeight:'bold',color:'black'}} to={'/'}>E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* wishlist */}
            <Nav.Link className='btn'><Link className='d-flex align-items-center' style={{textDecoration:'none',color:'black'}} to={'/wishlist'}>
                <i class="fa-sharp fa-solid fa-heart" style={{color: '#e90c17'}}></i>Wishlist
                <Badge className='ms-2' bg="primary"> {wishlist.length} </Badge>
                </Link>
            </Nav.Link>
            {/* home */}
            <Nav.Link className='btn ms-3'><Link className='d-flex align-items-center' style={{textDecoration:'none',color:'black'}} to={'/cart'}>
                <i className='fa-solid fa-heart text-danger me-3'></i>Cart
                <Badge className='ms-2 rounded' bg="primary">{cart.length}</Badge>
                </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header