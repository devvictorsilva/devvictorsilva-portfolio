import lameffLogo from '../assets/lameff-logo.png';
import speedMatchLogo from '../assets/speedmatch-logo.png';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    name: "B&Q Energia",
    description: "O projeto B&Q Telemetria é uma aplicação SPA desenvolvida para gerenciar todos os ativos da empresa B&Q Energia. A plataforma abrange a administração de usuários, parâmetros e folgas, com foco principal no acompanhamento de obras executadas para clientes como Enel e Neoenergia, em todo o território nacional e também na Colômbia. A aplicação cobre todas as etapas das obras — desde o planejamento e a vistoria até a execução final. Foi desenvolvida utilizando Python com o framework Django no backend, PostgreSQL como banco de dados, Angular no frontend e SCSS para estilização.",
    image: "https://media.licdn.com/dms/image/v2/C4D0BAQHBUP2IhHbjog/company-logo_400_400/company-logo_400_400/0/1630508520879/beqenergia_logo?e=2147483647&v=beta&t=4Idy3EVZ3Se-JmqLoTATLHYMOldplBgfooNLFzbUmkI",
    tags: ["Python", "Django", "PostgreSQL", "Angular", "SCSS"]
  },
  {
    name: "Acqualog",
    description: "Acqualog é uma plataforma de gestão de dados de qualidade da água, desenvolvida para facilitar o monitoramento e a análise de dados ambientais a partir da captação de informações por sensores em bacias hidrográficas cadastradas. O sistema permite o registro de parâmetros e variáveis para acompanhamento contínuo, além da geração de relatórios com visualizações gráficas dos dados coletados. A aplicação foi desenvolvida com Python e Django no backend, utilizando PostgreSQL como banco de dados. O frontend é construído com Angular e estilizado com SCSS.",
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
    description: "SpeedMatch é uma aplicação voltada para empresas de venda de carros de luxo, composta por dois módulos principais: um para administradores, responsável pela gestão dos veículos disponíveis para venda, e outro para vendedores, que utilizam a plataforma para encontrar o carro ideal com base nas preferências dos clientes. Caso não exista um carro compatível no momento, o sistema permite registrar o desejo do cliente, possibilitando um contato futuro assim que um veículo correspondente for cadastrado. A aplicação é desenvolvida com NestJS no backend, utilizando PostgreSQL como banco de dados e TypeORM como ORM. O frontend é construído com React, estilizado com Shadcn UI, e a infraestrutura é containerizada com Docker.",
    image: speedMatchLogo,
    tags: ["Nestjs", "React", "PostgreSQL", "TypeORM", "Docker", "Shadcn"]
  }
]