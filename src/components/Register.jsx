import {useRef} from "react";
import {useNavigate} from "react-router-dom"

export default function Register() {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const fnameRef = useRef(null);
    const lnameRef = useRef(null);

    const toConfirmation = () => {
        const user = {
            email: emailRef.current.value,
            fname: fnameRef.current.value,
            lname: lnameRef.current.value,
        }
        navigate("/confirmed",{state:{user}})
    }

    function handleSubmit(event) {
        event.preventDefault();
        toConfirmation()
    }

    return (
        <div className="container">
            <h1>Register for SchoolHacks next Workshop</h1>
            <p>
                Make sure to grab your spot for this year's workshop! We love
                technology and consistently work towards being the premier provider of
                workshops and events that interest our students.
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input required type="text" name="email" ref={emailRef}/>
                </label>
                <label>
                    First Name:
                    <input required type="text" name="fname" ref={fnameRef}/>
                </label>
                <label>
                    Last Name:
                    <input required type="text" name="lname" ref={lnameRef}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
