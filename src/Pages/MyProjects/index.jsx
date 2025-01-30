import { useState } from "react";
import Modal from "./modal";
import BackButton from "../../components/BackButton";
import projectInfo from "./projectsDescription";
import './projects.css'; 

function ProjectsImage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (src) => {
        setModalImage(src);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalImage("");
    };

    return (
        <section className="container my-5 rounded-4 p-2">
            <BackButton />
            <div className="row text-light fw-bold fs-4 mt-5">
                {projectInfo.map((item, index) => (
                    <div key={index} className="col-12 mb-4">
                        <div className="project-card">
                            <h1 className="project-title">{item.title}</h1>
                            <img
                                src={item.src}
                                alt={item.title}
                                className="img-fluid project-image"
                                onClick={() => openModal(item.src)}
                            />
                            <p className="project-description">{item.description}</p>
                            <a className="text-danger project-link" href={item.gitHubLink}>💻 Repositório no GitHub</a>
                            <br />
                            <a className="text-light project-link" href={item.gitHubPagesLink}>🌐 Repositório no GitHub Pages</a>
                        </div>
                    </div>
                ))}
            </div>

            {modalIsOpen && <Modal modalImage={modalImage} closeModal={closeModal} />}
        </section>
    );
}

export default ProjectsImage;
