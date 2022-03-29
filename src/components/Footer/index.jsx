import  { BsGithub, BsLinkedin } from 'react-icons/bs';
import  { MdEmail } from 'react-icons/md';
import './style.css';

export function Footer() {
  return (
    <footer>
      <span>
        Minhas redes:
      </span>
      <a href="https://www.linkedin.com/in/matheus-braga-dias-6129a31b0/" target="_blank" rel="noreferrer">
        <BsLinkedin />
        <span>Linkedin</span>
      </a>
      |
      <a href="https://github.com/Matheus-Days" target="_blank" rel="noreferrer">
        <BsGithub />
        <span>Github</span>
      </a>
      |
      <a href="mailto:matheusbragaprofissional@gmail.com">
        <MdEmail />
        <span>E-mail</span>
      </a>
    </footer>
  );
}