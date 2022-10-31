import {Link, useParams} from "react-router-dom";
import {getWorkshop} from "../api.js";

export default function Workshop(props) {
    const{workId} = useParams()
    const workshop = getWorkshop(workId)

    return (
        <>
            <h2>{workshop.name}</h2>
            <ul className="session-list">
                {workshop.sessions.map(session =>
                    <li className="session" key={session.id}>
                        <Link to={session.id}>
                            <p className="session-name">{session.name}</p>
                            <p>{session.speaker.name} | {session.speaker.org}</p>
                        </Link>
                    </li>
                )}
            </ul>
        </>
    );
}
