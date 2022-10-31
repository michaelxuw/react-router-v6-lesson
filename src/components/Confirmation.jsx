import {useLocation} from "react-router-dom";

export default function Confirmation() {
    const location = useLocation()

    return (
        <div className="container">
            <h1>Thank You!</h1>
            <p>{location.state.fname} {location.state.lname}</p>
            <p>You're now registered for SchoolHacks.</p>
        </div>
    );
}
