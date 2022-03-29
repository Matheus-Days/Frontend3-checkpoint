import { BsStarFill } from "react-icons/bs";
import { tools } from "../../data/tools";
import { Tech } from "../Tech";
import "./style.css";

export function Tools() {
  return (
    <section id="tools">
      <div className="frame">
        <h2>Ferramentas e tecnologias</h2>
        <ul className="tools-list">
          {tools.map(tool => <Tech key={tool.key} img={tool.img} name={tool.name} grasp={tool.grasp} />)}
        </ul>
        <div className="subtitle">
          <BsStarFill /> - Conhecimento básico, pouca prática | {" "}
          <BsStarFill />
          <BsStarFill /> - Conhecimento abrangente, prática amadora | {" "}
          <BsStarFill />
          <BsStarFill />
          <BsStarFill /> - Conhecimento abrangente, prática profissional.
        </div>
      </div>
    </section>
  );
}
