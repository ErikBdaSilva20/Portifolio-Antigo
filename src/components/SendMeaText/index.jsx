import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function MensageContactArea() {
  const [message, setMessage] = useState(""); // Mensagem do usuário

  return (
    <Container className="col-12">
      <div className=" mt-5 bg-danger bg-opacity-10 p-4 rounded-5 w-100 ">
        <h1 className="mb-4 text-light fs-1 text-center">Deseja entrar em contato?</h1>
        <p className="fs-4 fw-bold text-light text-center mb-4">
          Seguem as principais fontes abaixo
        </p>

        {/* Seção de contato */}
        <section className=" text-light">
          <h2 className="fw-bold">Converse comigo</h2>

          {/* Link para WhatsApp */}
          <div className="mb-4 ">
            <label className="text-danger fw-bold fs-5 mb-1">
              Caso precise de uma resposta rápida, entre em contato via WhatsApp
            </label>
            <a
              href="https://wa.me/54999566625"
              target="_blank"
              className="btn border-danger border-2  text-light fw-bold d-flex justify-content-center align-items-center w-100 py-2 bg-opacity bg-danger bg-opacity-50"
            >
              Enviar mensagem via WhatsApp
            </a>
          </div>

          {/* Campo de E-mail */}
          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-bold fs-4 ">
              Meu e-mail
            </label>
            <input
              type="email"
              className="form-control  text-light fw-bold border-danger border-2  bg-dark bg-opacity-10"
              id="email"
              value="erikborgesdasilva2077@gmail.com" // E-mail já predefinido
              readOnly
            />
          </div>

          {/* Campo de Mensagem */}
          <div className="mb-1 mb-4">
            <label htmlFor="message" className="form-label fw-bold fs-4">
              Mensagem
            </label>
            <textarea
              className="form-control bg-dark bg-opacity-50 text-light border-2  border-danger fw-bold"
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* Botão de Enviar E-mail */}
          <div className="mb-1">
            <a
              href={`mailto:erikborgesdasilva2077@gmail.com?subject=Assunto&body=${encodeURIComponent(message)}`}
              className="btn btn-danger text-light fw-bold w-100 py-2"
            >
              Enviar E-mail
            </a>
          </div>
        </section>
      </div>
    </Container>
  );
}
export default MensageContactArea;
