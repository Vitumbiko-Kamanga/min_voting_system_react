import Btn from './Btn.jsx'
function Landing(){
    return(
        <div className='h-screen bg-gray-900 flex flex-col gap-10 justify-center items-center'>
            <div className='flex flex-col gap-4 justify-center pl-12'>
                <h1 className="text-6xl font-bold align-center text-white">It's Time to make a VOTE</h1>
                <h2 className="text-4xl text-gray-300 p-4 pl-12">Welcome to the Voting App</h2>
                <h2 className="text-2xl text-gray-300 pl-12">Cast your vote and make your voice heard</h2>
            </div>
            <Btn btnType="" text="Get Started" />
        </div>
    )
}
export default Landing;