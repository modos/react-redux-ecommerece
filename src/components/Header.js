import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
const Header = () => {
  const count = useSelector(state => state.cart.count)
  const cartStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const badgeStyle = {
    position: 'relative',
    right: 6 + 'px',
    bottom: 8 + 'px',
    color: 'white',
    backgroundColor: 'darkgray',
    width: 16 + 'px',
    height: 16 + 'px',
    fontWeight: 'bold',
  }
  return (
    <nav>
        <ul className='container'>
            <li><Link to='/'>All Products</Link></li>
            <li><Link to='/smartphones'>Smartphones</Link></li>
            <li><Link to='/notebooks'>Notebooks</Link></li>
            <li className='cart' style={cartStyle}>
                <Link to="/cart" style={{padding: 0}}><button>Cart</button></Link>
                <span style={badgeStyle}>{count}</span>
            </li>
        </ul>
    </nav>
  )
}

export default Header