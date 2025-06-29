// services.tsx
import { CiDesktop, CiServer } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { LuTestTubeDiagonal } from "react-icons/lu";

import Carousel from "./Carousel/Carousel";

export const services = [
  {
    title: "Web Development",
    text: "Sou especialista na construção de aplicações web completas, do backend ao frontend. Utilizo tecnologias modernas como TypeScript, React, NestJS, PostgreSQL e Docker para entregar sistemas robustos, escaláveis e com ótimo desempenho. Valorizo código limpo, boas práticas e foco na experiência do usuário, buscando sempre entregar soluções práticas, visuais e bem arquitetadas.",
    icon: <FaCode size={48} className="text-accent" />,
  },
  {
    title: "Desenvolvimento Front-End",
    text: "Tenho profundo conhecimento em design de interfaces funcionais e responsivas usando React, Angular e Tailwind CSS. Meu foco é transformar ideias em experiências visuais intuitivas e fluidas. Trabalho com atenção a microinterações, performance e acessibilidade, garantindo que cada componente visual tenha propósito e emoção.",
    icon: <CiDesktop size={48} className="text-accent" />,
  },
  {
    title: "Criação de Backends Modernos e APIs",
    text: "Com NestJS e Django, desenvolvo APIs REST e serviços backend bem estruturados, seguros e fáceis de escalar. Integro bancos de dados relacionais como PostgreSQL e uso Docker para garantir ambientes estáveis. Busco criar sistemas organizados, com testes e autenticação, prontos para qualquer desafio.",
    icon: <CiServer size={48} className="text-accent" />,
  },
  {
    title: "Integração e Gerenciamento de Projetos Reais",
    text: "Tenho experiência com projetos reais e em produção, incluindo sistemas para empresas como BEQ Energia, Acqualog e Lameff. Atuo desde a análise até o deploy, acompanhando o ciclo de vida completo da aplicação. Isso me permite entregar soluções reais que atendem demandas complexas com segurança e confiabilidade.",
    icon: <GoProjectRoadmap size={48} className="text-accent" />,
  },
  {
    title: "Testes e Qualidade de Código",
    text: "Tenho afinidade com testes automatizados (como Jest) e práticas de versionamento limpo. Busco garantir que meu código não apenas funcione, mas seja confiável a longo prazo. Sempre que possível, aplico boas práticas de CI/CD e escrevo código que outros desenvolvedores conseguem manter com facilidade.",
    icon: <LuTestTubeDiagonal size={48} className="text-accent" />,
  },
];

export default function CarouselServices() {
  return (
    <Carousel
      items={services}
    />
  )
}