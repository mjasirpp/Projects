import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { checkOutCart, removeFromCart } from '../redux/slices/cartSlice'

function Cart() {
  const cartArray = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()
  const getCartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  const CheckoutCart = ()=>{
    dispatch(checkOutCart())
    alert("Your oder have successfully placed..")
    navigate('/')
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  return (
    <div className='container' style={{marginTop:'10px'}}>
      {
        cartArray.length>0?
        <div className='row mt-5'>
          <div className='col-lg-7'>
            <table className='table shadow border'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartArray.map((product,index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{product.title}</td>
                      <td><img width={'100px'} height={'100px'} src={product.thumbnail} /></td>
                      <td>$ {product.price}</td>
                      <td><button onClick={()=>dispatch(removeFromCart(product.id))} className='btn'><i style={{border:'none'}} className='fa-solid fa-trash text-danger fa-2x'></i></button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-4'>
            <div className='border p-3 rounded shadow'>
              <h1 className='text-primary'>Cart Summary</h1>
              <h4 className='mt-3'>Total Products: <span> {cartArray.length} </span> </h4>
              <h4 className='mt-3'>Total : <span className='text-danger fw-bolder fs-2'>$ {total}</span></h4>
              <div className='d-grid'>
                <button onClick={CheckoutCart} className="btn text-light bg-success btn-success mt-5 rounded">Check Out</button>
              </div>
            </div>
          </div>
        </div>
        : <div style={{height:'50vh'}} className='w-100 mt-5 d-flex flex-column justify-content-center     align-items-center'>
        <img style={{height:'30%'}} src="https://media.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif"/>
        <h3> Your Cart is empty...</h3>
        <p><Link style={{textDecoration:'none',color:'black'}} to={"/"}> Back to Home</Link></p>
      </div>
      }
    </div>
  )
}

export default Cart