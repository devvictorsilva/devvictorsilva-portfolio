import lameffLogo from '../assets/lameff-logo.png';
import speedMatchLogo from '../assets/speedmatch-logo.png';

interface Project {
  name: string;
  description: string;
  image: string | ImageMetadata;
  tags: string[];
}
export const projects: Project[] = [
  {
    name: "BEQ Energia",
    description: "Descrição BEQ",
    image: "https://media.licdn.com/dms/image/v2/C4D0BAQHBUP2IhHbjog/company-logo_400_400/company-logo_400_400/0/1630508520879/beqenergia_logo?e=2147483647&v=beta&t=4Idy3EVZ3Se-JmqLoTATLHYMOldplBgfooNLFzbUmkI",
    tags: ["Python", "Django", "PostgreSQL", "Angular", "SCSS"]
  },
  {
    name: "Acqualog",
    description: "dsf",
    image: "https://solucoes.agora.fiocruz.br/sites/default/files/imagens/solucoes/industriais/logovertical_1.png",
    tags: ["Python", "Django", "PostgreSQL", "Docker", "Angular", "SCSS"]
  },
  {
    name: "Glassmaxi",
    description: "dsf",
    image: "https://ncdn0.infojobs.com.br/logos/2013/10/11/274980.jpg",
    tags: ["React"]
  },
  {
    name: "Lameff",
    description: "dsf",
    image: lameffLogo,
    tags: ["React", "Tailwind CSS", "Shadcn", "Jest"]
  },
  {
    name: "SpeedMatch",
    description: "dsf",
    image: speedMatchLogo,
    tags: ["Nestjs", "React", "PostgreSQL", "TypeORM", "Docker", "Shadcn"]
  }
]