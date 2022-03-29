import { BsStar, BsStarFill } from 'react-icons/bs';
import './style.css';

export function Tech({img, name, grasp}) {
  const filledStars = [...Array(grasp)];
  const emptyStars = [...Array(3 - grasp)];
  
  return (
    <li className="tech">
      <img src={img} alt={name + " icon"} />
      <span className="name">{name}</span>
      <span className="grasp">
        {filledStars.map((val, i) => <BsStarFill key={i} color="#eca72c" />)}
        {emptyStars.map((val, i) => <BsStar key={i} color="#eca72c" />)}
      </span>
    </li>
  );
}