import { About } from '../About';
import { Projects } from '../Projects';
import { Tools } from '../Tools';
import './style.css';

export function Main() {
  return (
    <main>
      <About />
      <Tools />
      <Projects />
    </main>
  )
}