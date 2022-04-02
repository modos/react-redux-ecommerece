import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { checkout, remove } from '../features/cartSlice'
const MyCart = () => {

  let cart = useSelector(state => state.cart)
  console.log(cart)
  const dispatch = useDispatch()
  let cost = cart.cost
  cart = cart.cart

  const onCheckOutButtonClicked = () => {
    dispatch(
      checkout()
    )
  }

  const onRemoveButtonClicked = (s) => {
    dispatch(
      remove(s)
    )
  }

  if (!cart.length) {
    return <h4>Your Cart is Empty</h4>
  }

  return (
    <div>
      <div>
      <p style={{width: 70 + '%', margin: 'auto'}}><button type="button" onClick={() => onCheckOutButtonClicked()}>Check Out</button></p>
      <p style={{width: 70 + '%', margin: 'auto', marginTop: 8 + 'px'}}>Cost: {cost}</p>
            <ul className='cart-list'>
                {cart.map(s => (<li key={s.id}>
                    <div className='cart-list-item'>
                        <img src={s.img} alt="Avatar"/>
                            <div style={{marginLeft: 8 + 'px', width: 100 + '%', padding: 8 + 'px'}}>
                                <div style={{height: 90 + '%'}}>
                                <h4 style={{height: 38 + 'px'}}><b>{s.title}</b></h4>
                                <p>Category: {s.category}</p>
                                <p>Size: {s.size}</p>
                                <p>Detail: {s.detail}</p>
                                <p>Price: R$ {s.price}</p>
                                </div>
                                <div>
                                <p><button type="button" style={{width: 100 + '%'}} onClick={() => onRemoveButtonClicked(s)}>Remove</button></p>
                                </div>
                            </div>
                    </div>
                </li>))}
            </ul>
        </div>
    </div>
  )
}

export default MyCart