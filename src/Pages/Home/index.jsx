import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MensageContactArea from "../../components/SendMeaText";
import Header from "../../components/HomeHeader";


function Home() {
  return (
    <Container className="d-flex flex-column blur-effect">
      <Header />
      

      <section>
        
        <div className="d-flex flex-column ">

          <h1 className="text-danger mx-5 fw-bold">Breve resumo</h1>
          <div className="d-flex flex-row" >
            <p className="text-light fs-4 col-10 my-5 mx-5 flex-wrap ">
              Olá, prazer em recebe-lo ao meu portifólio! Sou Erik borges da
              Silva! Tenho 20 anos, e recentemente iniciei meus estudos na área
              da programação | desenvolvimento Full stack através da formação de
              programadores {""}
              <a href="https://rodolfomori.com.br/devclub/" className="fw-bold text-danger">
                Dev Club</a>.
              Desde então, tenho me apaixonado cada vez mais por estudar este
              vasto universo de linhas de código, sempre dando o meu melhor para
              evoluir e conquistar meus sonhos!
            </p>
          </div>
        </div>

      </section>

      <MensageContactArea />
    </Container>
  );
}

export default Home;
