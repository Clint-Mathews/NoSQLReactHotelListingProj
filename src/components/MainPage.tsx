import React, { useEffect, useState } from 'react'
import { isNotEmittedStatement } from 'typescript';
import Cards from './Cards';

function MainPage() {
    const [hotels, setHotels] = useState(null as any);
    useEffect(() => {
        async function getHotels() {
            const response = await fetch('http://localhost:8888/.netlify/functions/getHotels');
            const responseData = await response.json();
            console.log(responseData.data.hotel_data.values);
            setHotels(responseData.data.hotel_data.values);
        }
        getHotels();
    }, [])
    return (
        <div>
            <h1>Hotels</h1>
            {hotels && hotels.map((item: any) => {
                return (
                    <Cards item={item} />
                );
            })}
        </div>
    )
}

export default MainPage
