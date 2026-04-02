function Label({htmlFor, text}){
    return(
        <>
            <label className= 'font-semibold text-lg' htmlFor={htmlFor}> {text}</label>
        </>
    );
}

export default Label;