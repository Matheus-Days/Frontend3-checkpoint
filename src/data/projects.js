import psytePng from "../assets/psyte.png";
import letmeaskSvg from "../assets/letmeask.svg";
import damaSvg from "../assets/dama.svg";

export const projects = [
  {
    key: "p1",
    name: "Psyte",
    description:
      "Landing page profissional para psicólogo com funcionalidade de agendamento e videochamada.",
    img: psytePng,
    url: "",
    repo: "https://github.com/Matheus-Days/psyte-app",
  },
  {
    key: "p2",
    name: "Let me ask",
    description:
      "Aplicação para prática de React. Oferece salas onde um público pode fazer perguntas ao dono da sala e votar naquelas que querem ver respondidas.",
    img: letmeaskSvg,
    url: "https://letmeask-bc5d7.web.app/",
    repo: "https://github.com/Matheus-Days/letmeask",
  },
  {
    key: "p3",
    name: "Dama",
    description: "Landing page para divulgação do novo produto tecnológico da Audo Tecnologia e Saúde.",
    img: damaSvg,
    url: "http://www.damacad.com.br/",
    repo: "https://github.com/Matheus-Days/dama-website",
  },
];
