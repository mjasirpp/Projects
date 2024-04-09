import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../Components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from '../redux/RestaurantSlice.js'

function Home() {
    const {allRestaurants,loading,error} = useSelector((state)=>state.restaurantSlice)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(fetchRestaurants())
    },[])
  return (
    <>
        <div className='d-flex justify-content-center align-items-center'>
            {
                loading &&
                <img height={'250px'} className='w-80' src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" alt="loading image" />
            }
        </div>
        <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
            {
                !loading && error?
                <div><span className='fw-bolder text-danger'>{error}</span></div>:null
            }
        </div>
        <Row className='mt-5'>
            {
                !loading &&
                allRestaurants?.length>0?allRestaurants?.map(restaurant=>(
                    <Col className='px-5 py-3' sm={12} md={6} lg={4} xl={3}>
                        <RestCard restaurant={restaurant}/>
                    </Col>
                ))
                :
                <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
                    <img src="https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif" alt="not found gif" />
                </div>
            }
        </Row>
    </>
  )
}

export default Home