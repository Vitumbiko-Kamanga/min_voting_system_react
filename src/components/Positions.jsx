import BallotScreen from "./BallotScreen";
function Positions(){
    const positions ={
        "president":[
            {name:"Vitumbiko"},
            {name:"Yashar"}
        ],
        "secretary":[
            {name:"Caleb"},
            {name:"Daniel"}
        ],
        "tresurer":[
            {name:"Abdull"},
            {name:"Maxwell"}
        ],
        "coordinator":[
            {name:"Tadala"},
            {name:"Patrick"}
        ]
    }

    if(BallotScreen.positions.position === "president"){
        return(
            <div className="bg-gray-700 w-100 p-5 text-left rounded-lg justify-center border border-gray-500 mx-auto">
                <h2 className="text-3xl font-bold">{positions["president"][0].name}</h2>
                <p className="text-gray-400">{text}</p>
            </div>   
        )
    }
    else{
        return(
            <div>
                <h2 className="text-red-700">Error 404</h2>
            </div>
        )
    }

    // return(
    //     <div>

    //     </div>
    // )
}
export default Positions;