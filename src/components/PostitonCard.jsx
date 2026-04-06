import {Route, Routes, Link} from 'react-router-dom'
import { useState } from 'react';

import Positions from './Positions.jsx'

function PositionCard({title, text, position}){
    let symbol = ">";
    const positions = {
        position: "president",
        position: "secretary",
        position: "tresurer",
        position: "coodinator"
    }
    return(
        <div className="bg-gray-700 w-100 p-5 text-left rounded-lg justify-center border border-gray-500 mx-auto">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-400">{text}</p>

           {positions.position && <Link to="/Positions" className='text-lg text-yellow-700'>View Candidates {symbol}</Link>} 
            <Routes>
                <Route path='/Positions' element ={< Positions/>} />
            </Routes>


        </div>
    )
}

export default PositionCard;