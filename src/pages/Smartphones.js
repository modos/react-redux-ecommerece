import React from 'react'
import data from '../data.json'
import { useDispatch } from 'react-redux'
import { productAdded } from '../features/cartSlice'
import { Link } from "react-router-dom"

const Smartphones = () => {
    const d = data.data
    const dispatch = useDispatch()

    const onAddCartButtonClicked = (s) => {
        dispatch(
            productAdded(s)
        )
    }
    return (
        <div>
            <div>
                <ul className="main">
                    {d.map(function (s) {
                        if (s.category === "smartphone") {
                            return (<li key={s.id}>
                                <div className="card">
                                    <img src={s.img} alt="Avatar" style={{ width: 100 + '%' }} />
                                    <div>
                                    <Link to={"/products/" + s.id} style={{ textDecoration: 'none', color: 'black'}}><h4 style={{height: 38 + 'px'}}><b>{s.title}</b></h4></Link>
                                        <p><button type="button" onClick={() => onAddCartButtonClicked(s)} style={{ width: 100 + '%' }}>Add to Cart</button></p>
                                    </div>
                                </div>
                            </li>)
                        }
                    }
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Smartphones