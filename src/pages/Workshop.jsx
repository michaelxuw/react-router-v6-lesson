import {useParams} from "react-router-dom";
import {getWorkshop} from "../api.js";

export default function Workshop(props) {
    const{workId} = useParams()
    const workshop = getWorkshop(workId)

    return (
        <>
            <h2>{workshop.name}</h2>
            <ul className="session-list">
                {workshop.sessions.map(work =>
                    <li key={work.name} className="container">
                        <p className="session-name">{work.name}</p>
                        <p>{work.speaker.name}|{work.speaker.org}</p>
                    </li>
                )}
            </ul>
        </>
    );
}
