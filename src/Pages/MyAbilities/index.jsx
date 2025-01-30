import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import BackButton from "../../components/BackButton";
import './styles.css'

function MyAbilities() {
    return (
        <Container >
            <div >
                <BackButton/>
            </div>

            <div className="d-flex text-light fs-5 p-3 mt-5 w-100 rounded-5 block">
                <div className="d-flex flex-column align-items-center w-100 text-wrap lh-lg">
                    <h2 className="soft-skills-heading">
                        Soft Skills
                    </h2>

                    <p className="soft-skills-text">
                        Minhas Soft skills são um pilar importante no meu desenvolvimento...
                    </p>

                    <ul className="text-light fw-bold d-flex flex-column align-items-center">
                        <li>Comunicação</li>
                        <li>Trabalho em equipe</li>
                        <li>Resiliência</li>
                        <li>Gestão de tempo</li>
                        <li>Adaptabilidade</li>
                        <li>Ouvinte</li>
                        <li>Me inturmo com facilidade</li>
                        <li>Dedicado</li>
                        <li>Disposição para aprender</li>
                     
                    </ul>
                </div>
            </div>

            <div className="d-flex text-light fs-5 p-3 mt-5 w-100 rounded-5 block">
                <div className="d-flex flex-column align-items-center w-100">
                    <h2 className="soft-skills-heading">
                        Competências Técnicas
                    </h2>

                    <p className="text-light fw-bold row col-12 soft-skills-text">
                        Minhas competências técnicas ainda estão em desenvolvimento...
                    </p>

                    <div className="d-flex justify-content-start w-100">
                        <ul className="text-light fw-bold fs-4 d-flex flex-column align-items-start w-50">
                            <li className="html">HTML</li>
                            <li className="css">Css</li>
                            <li className="javascript">JavaScript</li>
                            <li className="bootstrap">Bootstrap</li>
                            <li className="react">React</li>
                            <li className="git-github">Git & GitHub</li>
                            <li className="nodejs">Node.JS</li>
                            <li className="mongodb">MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default MyAbilities;
