import {useLocation} from "react-router-dom";

export default function Confirmation() {
    const location = useLocation()
    const{email, fname, lname} = location.state.user

    return (
        <div className="container">
            <h1>Thank You!</h1>
            <p>{fname} {lname}, you're now registered for SchoolHacks.</p>
            <p>We've sent more details to {email}.</p>
        </div>
    );
}
