import lameffLogo from '../assets/lameff-logo.png';
import speedMatchLogo from '../assets/speedmatch-logo.png';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    name: "B&Q Energia",
    description: "O projeto B&Q telemetria é uma SPA responsável pelo gerenciamento de todos os ativos da empresa B&Q Energia, incluindo usuários, parâmetros, folgas, mas com foco em obras realizadas para clientes de todo o território nacional e Colômbia como Enel e NeoEnergia. A aplicação gerencia todas as etapas das obras. desde o planejamento de obra e vistoria até a sua execução. A aplicação é desenvolvida em Python com Django, utilizando PostgreSQL como banco de dados e Angular para o frontend. O projeto também utiliza SCSS para estilização.",
    image: "https://media.licdn.com/dms/image/v2/C4D0BAQHBUP2IhHbjog/company-logo_400_400/company-logo_400_400/0/1630508520879/beqenergia_logo?e=2147483647&v=beta&t=4Idy3EVZ3Se-JmqLoTATLHYMOldplBgfooNLFzbUmkI",
    tags: ["Python", "Django", "PostgreSQL", "Angular", "SCSS"]
  },
  {
    name: "Acqualog",
    description: "Acqualog é uma plataforma de gestão de dados de qualidade da água, desenvolvida para atender às necessidades de monitoramento e análise de dados ambientais, a partir da capitação de dados de sensores nas bacias cadastradas. O sistema também possibilita o cadastro de parâmetros e variáveis para monitoramento, medição e relatórios em gráfico desses valores. A plataforma é construída com Python e Django, utilizando PostgreSQL como banco de dados. O frontend é desenvolvido em Angular, com SCSS para estilização.",
    image: "https://solucoes.agora.fiocruz.br/sites/default/files/imagens/solucoes/industriais/logovertical_1.png",
    tags: ["Python", "Django", "PostgreSQL", "Docker", "Angular", "SCSS"]
  },
  {
    name: "Glassmaxi",
    description: "Glassmaxi Conceito é um backoffice de gestão de pedidos e orçamentos para revendedores de vidros e esquadrias. Além de possibilitar o monitoramento dos pedidos, como status e localização da entrega. Foi desenvolvido para otimizar o processo de vendas e gestão de pedidos. A aplicação é construída com Java com Spring, utilizando PostgreSQL como banco de dados. O frontend é desenvolvido em React e Tailwind CSS para estilização.",
    image: "https://ncdn0.infojobs.com.br/logos/2013/10/11/274980.jpg",
    tags: ["React"]
  },
  {
    name: "Lameff",
    description: "É um sistema de gerenciamento de materiais (com categorias e unidades de medidas diferentes) para monitoramento de eletrolisadores com controle variáveis como produção e consumo de energia, dados ambientais e eficiência operacional, visando aumentar a qualidade e reduzir os custos da produção de H2V. Foi desenvolvido com React, Tailwind CSS e Shadcn para o frontend, com testes automatizados utilizando Jest.",
    image: lameffLogo,
    tags: ["React", "Tailwind CSS", "Shadcn", "Jest"]
  },
  {
    name: "SpeedMatch",
    description: "SpeedMatch é uma aplicação para empresas de venda carros de luxo, que é possui 2 módulos de atuação, um para o administrador que gerencia os carros disponíveis para venda, e o segundo módulo é usado pelo vendedor para encontrar o carro ideal para o cliente, com base em suas preferências. Se não houver match de carro, o app permite cadastrar o desejo do cliente, e com um posterior match o vendedor contata o possivel comprador. A aplicação é desenvolvida com NestJS no backend, utilizando PostgreSQL como banco de dados e TypeORM para ORM. O frontend é construído com React e Shadcn para estilização, além de Docker para containerização.",
    image: speedMatchLogo,
    tags: ["Nestjs", "React", "PostgreSQL", "TypeORM", "Docker", "Shadcn"]
  }
]