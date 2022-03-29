import { BsGithub, BsLink } from "react-icons/bs"
import "./style.css";

export function ProjectCard({ data }) {
  const { img, name, description, repo, url } = data;
  
  return (
    <div className="project-card">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="info-container">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <p className="repo">
          Repositório <a href={repo}>aqui <BsGithub /></a>
        </p>
        {url ? (
          <p className="url">
            Aplicação disponível <a href={url}>aqui <BsLink /></a>
          </p>
        ) : (
          <p className="url">
            Aplicação fora do ar no momento.
          </p>
        )}
      </div>
    </div>
  );
}
