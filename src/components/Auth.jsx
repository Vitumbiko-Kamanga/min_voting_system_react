import Label from './Label.jsx'
import Btn from './Btn.jsx'
import Landing from './landing.jsx'
import { Routes, Route, Link } from 'react-router-dom'

function Auth() {
    return(
        <div className="bg-gray-900 h-screen text-white content-center ">

            <div className='p-10 mx-auto flex flex-col w-lg rounded-2xl bg-gray-800'>
                <h2 className='text-2xl font-semibold text-center p-2'>Sign in to Continue</h2>
                <h2 className='text-lg text-center'>Welcome back! Please sign in to <br /> continue</h2>
                {/* the section with the imput sections regarding the sign in page */}
                <div className='pt-5 flex flex-col gap-2 '>
                    <Label htmlFor="email" text = "Email" />
                    <input className='border-1 p-2 rounded-xl w-full' type="email" name="email" id="email" placeholder='Enter your email address' required />
                    <Label htmlFor = "password" text = "Password" />
                    <input className='border-1 p-2 rounded-xl w-full' type="password" name="password" id="password" placeholder='Enter your password' required/>
                </div>
                <div className="flex flex-row py-4 text-gray-500">
                    <hr className='w-[100%] mt-3' /> 
                    <h3 className='px-5'>OR</h3>
                    <hr className=' w-[100%] mt-3' />

                </div>
                <h2 className="text-gray-500 text-center">Continue with</h2>
                {/* the use of the google links to continue */}
                <div className='flex flex-col'>
                    <Btn btnType="submit" text="Google" />
                    <Btn btnType="submit" text="Facebook" />
                    <h2 className='pt-5 text-center'>Dont't have an account! <a className='text-yellow-500' href="http://"> Sign Up</a></h2>
                </div>
            </div>
            {/* <Link to="/Landing" className='text-sm text-gray-500'> try</Link>
            <Routes>
                <Route path="/Landing" element={<Landing />} />
            </Routes> */}
        </div>
    )
}
export default Auth;