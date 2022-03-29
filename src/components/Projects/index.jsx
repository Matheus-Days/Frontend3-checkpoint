import { projects } from '../../data/projects'
import { ProjectCard } from '../ProjectCard';
import './style.css';

export function Projects() {
  return (
    <section id="projects">
      <h2>Meus projetos já concluídos</h2>
      <ul>
        {projects.map(project => 
          <ProjectCard key={project.key} data={project} />)}
      </ul>
    </section>
  )
}