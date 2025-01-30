import Buttons from "../Buttons";

function Header() {
    return (
        <header className="d-flex flex-column align-items-center justify-content-center ">
            <div
            
                className="d-flex flex-column align-items-center text-light gap-3 col-12"
                style={{
                    minHeight: "50vh", 
                    justifyContent: "center", 
                    textAlign: "center", 
                }}
                
            >
                <Buttons />

                {/* Nome */}
                <div className="col-12 text-center justify-content-center align-items-center">
                    <h1 className="fw-bold text-nowrap mt-3">Erik Borges da Silva</h1>
                </div>

                {/* Texto 'Sobre' */}
                <div className="mt-3 container col-12">
                    <p className="fs-4 container  w-auto align-items-center justify-content-center">
                        <span className="fw-bold">Programador | Desenvolvedor Front End</span><br/>
                        A cada dia batalhando para conquistar alcançar o Full Stack.
                    </p>
                </div>

                {/* Botões */}
                <div className="mt-5">
                </div>
            </div>
        </header>
    );
}

export default Header;
