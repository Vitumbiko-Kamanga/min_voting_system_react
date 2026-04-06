import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Btn from './Btn.jsx'
import { useState } from 'react'
function Landing(){

    // const [count,setCount] = useState(0);
    // const [toggle, setToggle] = useState(false);
    // const [message, setMessage] = useState("Malawi");
    return(
        <div className='h-screen bg-gray-900 flex flex-col gap-10 justify-center items-center'>
            {/* <FontAwesomeIcon icon={faCheck } /> */}
            <div className='flex flex-col gap-4 justify-center pl-12'>
                <h1 className="text-6xl font-bold align-center text-white">It's Time to make a VOTE</h1>
                <h2 className="text-4xl text-gray-300 p-4 pl-12">Welcome to the Voting App Demo</h2>
                <h2 className="text-2xl text-gray-300 pl-12">Cast your vote and make your voice heard</h2>
            </div>
            {/* <button onClick={ ()=> setToggle(!toggle)}>Toggle</button>

            {toggle && <p>{message}</p>} */}
            {/* <h1>Points: { count }</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Minus</button>
            <button onClick={() => setCount(0)}>Reset</button> */}

            <Btn btnType="" text="Get Started" />
        </div>
    )
}
export default Landing;