function Btn({btnType,text}){

    return(
        <>
            <button className="border mt-10 rounded-xl px-6 py-2 " type={btnType}>{text}</button>
        </>
    );
}

export default Btn;