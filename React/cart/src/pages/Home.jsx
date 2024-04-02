import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlics'
import { addToCart } from '../redux/slices/cartSlice'

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  // console.log(data);
  const dispatch = useDispatch()
  return (
      <Row className='ms-5' style={{ marginTop: '100px' }}>
        {
          data?.length>0?data?.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
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
                    <Button onClick={()=>dispatch(addToWishlist(product))} className='btn'><i className='fa-solid fa-heart text-danger fa-2x'></i></Button>
                    <Button onClick={()=>dispatch(addToCart(product))} className='btn'><i className='fa-solid fa-cart-shopping text-success fa-2x'></i></Button>
                </div>
                </Card.Body>
              </Card>
            </Col>
          )): <p className='text-danger fw-bolder fs-4'>Nothing to display...</p>
        }
      </Row>
  )
}

export default Home