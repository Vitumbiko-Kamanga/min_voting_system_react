import PositionCard from './PostitonCard.jsx'

function BallotScreen(){
    return(
        < div className="flex flex-col gap-5 text-center bg-gray-900">
            <h1 className="text-5xl font-bold">Election Ballot</h1>
            <p className="text-2xl text-gray-200 ">Select a position to cast your vote</p>

            <PositionCard title="Department President" text=" The primary representative for all the students in the Computer Science department." position="president" />
            <PositionCard title="Department Secretary" text="Responsible for handling all the departmental communications." position="secretary" />
            <PositionCard title="Departmental Treasure" text="Responsible for keeping all the funds raised by the department." position="tresurer" />
            <PositionCard title="Event Coordinator" text= "Responsible for organizing departmental events, mixers and the annual gala." position="coodinator" />
        </div>
    );
}

export default BallotScreen;