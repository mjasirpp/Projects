import React from 'react'
import { Col, Row, Card, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlics'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'10px'}}>
      <Row className='m-5'>
        {
          wishlistArray.length>0?
          // console.log(wishlistArray) &&
          wishlistArray.map((product,index)=>(
            <Col key={index} className='mb-2 mt-3' sm={12} md={6} lg={4} xl={3}>
              <Card className='shadow rounded' style={{ width: '18rem',height:'30rem' }}>
                <Card.Img variant="top" height={'200px'} src={product.thumbnail} />
                <Card.Body>
                <Card.Title style={{color:'black'}}>{product.title}</Card.Title>
                <Card.Text style={{color:'black'}}>
                  {product.description.slice(0,55)}...
                  <br />
                  <span style={{color:'red'}}>Price : ${product.price}</span>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn'><i className='fa-solid fa-trash text-danger fa-2x'></i></Button>
                    <Button onClick={()=>handleWishlistCart(product)} className='btn'><i className='fa-solid fa-cart-shopping text-success fa-2x'></i></Button>
                </div>
                </Card.Body>
              </Card>
            </Col>
          )): <div style={{height:'50vh'}} className='w-100 d-flex flex-column justify-content-center     align-items-center'>
                <img style={{height:'30%'}} src="https://statementclothing.net/images/cart.gif"/>
                <h3> Your Wishlist is empty...</h3>
                <p><Link style={{textDecoration:'none',color:'black'}} to={"/"}> Back to Home</Link></p>
              </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist