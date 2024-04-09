import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';


function View() {
    const [restaurant,setRestaurant] = useState({})
    const [restaurantOP,setRestaurantOP] = useState({})
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {allRestaurants} = useSelector((state)=>state.restaurantSlice)
    const {id} = useParams()
    useEffect(()=>{
        setRestaurant(allRestaurants?.find(item=>item.id==id))
    },[])
    // console.log(restaurant);
    useEffect(()=>{
        setRestaurantOP(allRestaurants?.find(item=>item.id==id)?.operating_hours)
    },[])
    console.log(restaurantOP);
  return (
    <>
        <Row className='mt-5'>
            <Col >
                <img style={{marginRight:'50%'}} height={'450px'} className='w-90 ms-5 px-5' src={restaurant.photograph} alt="restaurant image" />
            </Col>
            <Col style={{marginLeft:"-10%"}}>
                <div>
                    <h1 className='mt-5'>{restaurant.name}</h1>
                    <p className='mt-4'>{restaurant.neighborhood}
                        <br />
                        <p className='mt-4'>Cuisine : {restaurant.cuisine_type}
                        <br />
                        Address : {restaurant.address}
                        </p>
                    </p>
                </div>
                <div className='mt-3'>
                    <p>
                        <button onClick={handleShow} className='btn btn-primary mt-2'>Operating Hours</button>
                    </p>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Operating Hours</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ul>
                                <li>Monday :</li>
                                <li>Tuesday :</li>
                                <li>Wednesday :</li>
                                <li>Thursday :</li>
                                <li>Friday : </li>
                                <li>Saturday :</li>
                                <li>Sunday :</li> 
                            </ul>
                            {/* {
                                restaurant.operating_hours && restaurant.operating_hours.map((item,index)=>(
                                    <p key={index}>
                                        {item}
                                    </p>
                                ))
                            } */}
                        </Modal.Body>
                        <Modal.Footer>
                        <Button  onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    <p>
                        <button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} className='btn btn-primary mt-2'>Click here to view the reviews
                        </button> 
                    </p>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                                {restaurant.reviews && restaurant.reviews.map((review, index) => (
                                    <div key={index}>
                                        <h1>{review.name}:</h1>
                                        <p> Rating : {review.rating} /5 <br /> {review.date} </p>
                                        <p>"{review.comments}"</p>
                                    </div>
                                ))}
                        </div>
                    </Collapse>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default View