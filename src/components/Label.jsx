function Label({htmlFor, text}){
    return(
        <>
            <label className= 'font-semibold' htmlFor={htmlFor}> {text}</label>
        </>
    );
}

export default Label;