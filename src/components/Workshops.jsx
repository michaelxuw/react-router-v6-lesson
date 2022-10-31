import {getWorkshops} from "../api";
import {Link, NavLink, Outlet} from "react-router-dom";

export default function Workshops() {
    const workshops = getWorkshops();
    const getClass = ({ isActive }) => (isActive ? "workshop-active" : null);

    return (
        <div className="container">
            <h1>Workshop Categories</h1>
            <ul className="workshops">
                {workshops.map(work => (
                    <NavLink to={work.id} className={getClass}>
                        <li key={work.id}>
                            {work.name}
                        </li>
                    </NavLink>
                ))}
            </ul>
            <Outlet/>
        </div>
    );
}
