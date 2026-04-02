function Btn({btnType,text}){
    if(btnType === "submit"){
        return(
            <>
                <button className="border mt-5 rounded-xl px-10 py-2 bg-blue-500 text-white text-lg" type={btnType}>{text}</button>
            </>
        );
    }
    else if(btnType === "reset"){
        return(
            <>
                <button className="border mt-10 rounded-xl px-10 py-2 bg-gray-300 text-gray-700 text-lg" type={btnType}>{text}</button>
            </>
        );
    }
    else{
        return(
            <>
                <button className="border mt-10 rounded-xl px-10 py-2 bg-gray-300 text-gray-700 text-lg" type="button">{text}</button>
            </>
        );
    }
}

export default Btn;