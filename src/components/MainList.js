import React from 'react'
import data from '../data.json'

const MainList = () => {
    const d = data.data
    return (
        <div>
            <ul className="main">
                {d.map(s => (<li key={s.id}>
                    <div className="card">
                        <img src={s.img} alt="Avatar" style={{width: 100 + '%'}}/>
                            <div className="container">
                                <h4><b>{s.title}</b></h4>
                                <button>Add to Cart</button>
                            </div>
                    </div>
                </li>))}
            </ul>
        </div>

    )
}

export default MainList