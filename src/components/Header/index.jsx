import './style.css';
import logoPng from '../../assets/Carimbo.png';

export function Header() {
  return (
    <header>
      <a className="logo-container" href="#about">
        <img src={logoPng} alt="logo" title="Matheus Braga" />
      </a>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#tools">Ferramentas</a>
        <a href="#projects">Portfólio</a>
      </nav>
    </header>
  );
}