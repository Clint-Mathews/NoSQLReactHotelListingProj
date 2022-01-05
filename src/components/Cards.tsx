import React from 'react'

function Cards({ item }: any) {
    return (
        <div key={item.id} className='cards'>
            <h2>Name: {item.name}</h2>
            <h2>Rating: {item.rating}</h2>
        </div>
    )
}

export default Cards
