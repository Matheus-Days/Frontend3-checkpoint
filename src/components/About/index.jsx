import { Emoji } from "../Emoji";
import "./style.css";

export function About() {
  return (
    <section id="about">
      <div className="banner">
        <div className="text-container">
          <div className="overlay"></div>
          <div className="text">
            <h3>Hello world!</h3>
            <p>Meu nome é Matheus Braga e eis um pouco sobre mim:</p>
            <p>
              Minha formação original é de psicólogo, porém estou em transição
              de carreira para me tornar um desenvolvedor de software, área pela
              qual eu descobri ser apaixonado quando desenvolvi meu primeiro
              projeto pessoal pela primeira vez em 2020, quando eu, como muitos,
              precisei reinventar minha vida.
            </p>
          </div>
        </div>
      </div>
      <div className="more-info">
        <div className="frame">
          <h3>Pontos rápidos:</h3>
          <ul>
            <li>
              <Emoji label="construção" size="20px" mr="12px">🏗</Emoji>
              Meu objetivo profissional atual é me tornar um desenvolvedor web
              fullstack.
            </li>
            <li>
            <Emoji label="construção" size="20px" mr="12px">🖥</Emoji>
              Atualmente trabalho como desenvolvedor frontend.
              </li>
            <li>
            <Emoji label="construção" size="20px" mr="12px">📚</Emoji>
              Para me ajudar a alcançar o fullstack estou cursando o{" "}
              <a href="https://www.digitalhouse.com/br/produtos/programacao/certified-tech-developer">
                CTD da Digital House.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
