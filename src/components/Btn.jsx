function Btn({btnType,text}){
    if(btnType === "submit"){
        return(
            <>
                <button className="border mt-5 rounded-xl px-6 py-2 bg-blue-500 text-white" type={btnType}>{text}</button>
            </>
        );
    }
    else if(btnType === "reset"){
        return(
            <>
                <button className="border mt-10 rounded-xl px-6 py-2 bg-gray-300 text-gray-700" type={btnType}>{text}</button>
            </>
        );
    }
    else{
        return(
            <>
                <button className="border mt-10 rounded-xl px-6 py-2 bg-gray-300 text-gray-700" type="button">{text}</button>
            </>
        );
    }
}

export default Btn;