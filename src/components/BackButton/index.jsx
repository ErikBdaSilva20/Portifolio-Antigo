import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="fs-3 p-2 top-0 start-0 position-absolute" style={{ zIndex: 10 }}>
        <button
          className="fw-bold bg-danger rounded-1 p-1 text-light border-0 mb-5"
          onClick={() => navigate("/Meu_Portifolio")} 
        >
          Voltar
        </button>
      </div>
    </Container>
  );
}

export default BackButton;
