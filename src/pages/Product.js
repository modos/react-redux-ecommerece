import React from 'react'
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { productAdded } from '../features/cartSlice'
import data from '../data.json'
import '../modal.css'
const Product = () => {
    let params = useParams();
    const dispatch = useDispatch()
    const [modalShow, toggleModal] = React.useState(false);
    const d = data.data
    const product = d.find(element => element.id == params.id)

    function toggle() {
        toggleModal(!modalShow)
    }

    const onAddCartButtonClicked = (s) => {
        dispatch(
          productAdded(s)
        )
      }

    return (
        <div>
            <div style={{ width: 50 + '%', margin: 'auto' }}>
                <div className='cart-list-item'>
                    <img src={product.img} alt="Avatar" />
                    <div style={{ marginLeft: 8 + 'px', width: 100 + '%', padding: 8 + 'px' }}>
                        <div style={{ height: 90 + '%' }}>
                            <h4 style={{ height: 38 + 'px' }}><b>{product.title}</b></h4>
                            <p>Category: {product.category}</p>
                            <p>Size: {product.size}</p>
                            <p>Price: R$ {product.price}</p>
                        </div>
                        <button onClick={toggle}>More Info</button>
                        <button onClick={() => onAddCartButtonClicked(product)} style={{marginLeft: 8 + 'px'}}>Add to Cart</button>
                    </div>
                </div>
            </div>
            {
                modalShow ?
                    <div id="myModal" className="modal">

                        <div className="modal-content">
                            <span className="close" onClick={toggle}>&times;</span>
                            <p>{product.detail}</p>
                        </div>

                    </div> :
                    null
            }
        </div>
    )
}

export default Product