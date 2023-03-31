import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Marcos Gabriel</Name>
        <Function>FullStack Developer</Function>
        <Intro>Estou Cursando o curso de técnico em desnvolvimento de sistemas, 
          tenho experiência em desenvolvimento Web
          (ReactJS, Java, Spring-Boot, Spring-Data-JPA, Spring-Security, Spring-MVC, Spring-Rest-Full, Mysql, Docker etc..) é tenho maior foco no desenvolvimento back-end
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
