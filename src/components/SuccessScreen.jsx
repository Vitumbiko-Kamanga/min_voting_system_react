import Btn from './Btn.jsx'
function SuccessScreen(){
    return(
        <div className="bg-gray-900 h-screen text-white flex flex-col gap-5 justify-center items-center">
            <h1 className="text-3xl"> Successfully Voted</h1>
            <h2 className="text-xl text-yellow-500">Thank You Very Much</h2>
            <Btn buttonType = "Button" text = "Finish" />

        </div>
    );
}

export default SuccessScreen;