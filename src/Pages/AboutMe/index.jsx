import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import BackButton from "../../components/BackButton";
import "./AboutMe.css"; 
import PhotoObject from "../../assets/DevPhoto";


function AboutMe() {
  return (
    <Container className="w-100">
      <div>
        <BackButton />
      </div>
      <section className="about-section d-flex flex-column align-items-center justify-content-center">
        <div className="text-light fs-5 p-3  rounded-5 mb-5 about-card">
          <div className="d-flex flex-column align-items-center w-100 text-wrap lh-lg">
            {/*Quem sou*/}
            <h1 className="fw-bold text-light">Conheça mais sobre mim!</h1>
            <h2 className="section-title">Quem sou eu?</h2>

            <p className="about-text text-wrap ">
              <div >
                <PhotoObject />
              </div>
              Me chamo Erik Borges da Silva, tenho 20 anos, sou do Rio Grande do
              Sul. Quando eu tinha cerca de 12 anos, ganhei meu primeiro
              computador, e logo me vi fascinado por aquele mundo. Inicialmente,
              eu usava o computador mais para o lazer, mas em diversas ocasiões,
              me deparei com vídeos sobre programação, algo que despertava minha
              curiosidade, embora eu nunca tenha ido a fundo. Foi só
              recentemente, cerca de 5 meses atrás, quando estava navegando no
              YouTube, que encontrei uma livestream de um mentor, o{" "}
              <a
                className="fw-bold text-danger"
                href="https://www.instagram.com/rodolfomorii/"
              >
                Rodolfo Mori
              </a>
              , onde ele estava criando uma réplica da Netflix. Aquele momento
              foi um divisor de águas para mim. Ali, senti uma motivação que
              nunca tinha experimentado antes. Ao me aprofundar nas aulas,
              percebi que a programação não era apenas algo interessante, mas
              algo que eu realmente gostava de fazer, ali eu me encontrei. A
              cada linha de código e a cada projeto que desenvolvia, a sensação
              de criação me envolvia mais. Hoje, programar e criar projetos se
              tornaram partes essenciais da minha vida. Além disso, estudar e
              aprender mais sobre programação é uma das minhas maiores paixões.
              Cada dia é uma nova oportunidade de expandir meus conhecimentos e
              habilidades, e estou sempre em busca de aprender o máximo
              possível. Encontrar essa paixão pela programação tem sido um
              verdadeiro combustível para mim, e, sem dúvida, é o que me move
              todos os dias. É o que me faz seguir em frente, sem nunca
            </p>
          </div>
        </div>

        <div className="about-card d-flex text-light fs-5 p-3 mt-3 rounded-5">
          <div className="d-flex flex-column align-items-center w-100 text-wrap lh-lg">
            <h2 className="section-title">
              Qual meu objetivo na programação??
            </h2>
            <p className="about-text">
              Meu objetivo é crescer continuamente sem nunca desistir, aprender
              e me adaptar com tecnologias, linguagens e ferramentas do mercado,
              começando como desenvolvedor Júnior e evoluindo para Pleno e
              Sênior. Sei que o aprendizado nunca chega ao fim e o caminho as
              vezes tende a ser longo, e é isso que torna a jornada tão
              empolgante, sempre querendo evoluir mais. Cada erro, cada desafio
              é uma oportunidade de aprender e me tornar melhor
            </p>
            <p className="about-text">
              Para mim, a programação é mais do que uma profissão. É a chance de
              criar, resolver problemas reais e transformar ideias em algo útil.
              Quero construir uma carreira sólida, conquistando minha
              independência pessoal e financeira, enquanto faço algo que
              realmente gosto.
            </p>
            <p className="about-text">
              Também quero retribuir à comunidade de tecnologia, que me inspira
              e ensina todos os dias. No futuro, espero compartilhar meu
              conhecimento e ajudar outros a seguirem seus caminhos na
              programação. Afinal, criar algo que pode mudar vidas, mesmo que de
              forma simples, é o que me motiva a continuar.
            </p>
          </div>
        </div>

        <div className="about-card d-flex text-light fs-5 p-3 mt-3 rounded-5">
          <div className="d-flex flex-column align-items-center w-100 text-wrap lh-lg">
            <h2 className="section-title">O que me guia</h2>
            <p className="about-text">
              credito que o sucesso vem da dedicação, consistência e da vontade
              de aprender todos os dias. Encaro desafios como oportunidades, e
              sei que cada passo, por menor que pareça, me aproxima de grandes
              conquistas. Cada erro deve ser usado como aprendizado{" "}
              <span className="text-danger">
                Uma certa vez, em um dos meus projetos pessoais, enquanto
                tentava aprender, cometi um erro ao realizar o deploy em uma
                plataforma. O resultado? Perdi o projeto inteiro, pois não havia
                feito backup. Esse incidente me ensinou a ser mais atento e
                cuidadoso. Apesar do erro, adquiri conhecimento valioso sobre
                como evitar situações semelhantes no futuro. {" "}
              </span>
               Aprendi que erros são a chave para melhorias
            </p>
          </div>
        </div>

        <div className="about-card d-flex text-light fs-5 p-3 mt-3 rounded-5 mb-5">
          <div className="d-flex flex-column align-items-center w-100 text-wrap lh-lg">
            <h2 className="section-title">
              Como é o Erik fora da programação?
            </h2>
            <p className="about-text">
              Além da programação, quando não estou envolvido com código, dedico
              meu tempo a explorar novas músicas, assistir a filmes ou desfrutar
              de um bom jogo, especialmente aos sábados à tarde, já que
              trabalhar no setor de varejo pode ser bastante exaustivo. Acredito
              que equilibrar o trabalho com momentos de lazer é fundamental para
              estimular a criatividade e permitir um descanso mental para
              encarar a próxima semana de trabalho e estudos. Também gosto de
              pedalar, uma atividade que me proporciona uma pausa do ambiente
              interno e me permite refletir e relaxar. É essencial reservar um
              tempo para si mesmo, permitindo-se recompensar pelo esforço e
              renovando as energias.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default AboutMe;
