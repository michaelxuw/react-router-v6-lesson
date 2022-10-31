import featImg from "../assets/main_img.jpg";
import {getWorkshops} from "../api.js";

export default function Workshops({ title }) {
  const workshops = getWorkshops()

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{workshops.map(workshop=>
        <ul>
          <li>{workshop.id}</li>
          <li>{workshop.name}</li>
        </ul>
      )}</p>
    </div>
  );
}
