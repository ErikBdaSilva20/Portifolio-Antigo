import myImage from "../../assets/DevPhoto/perfil.jpeg"; /*Link para a foto do desenvoledor*/

function PhotoObject() {
  const myPicture = { /*Foto do desenvolvedor*/
    maxWidth: "200px",  // Limita a largura da imagem
    maxHeight: "200px",
    borderRadius: "20%",
    border: "3px solid #ff00005a",
    boxShadow: "0 4px 6px rgb(255, 4, 4)",
    float: "left",  // Faz com que o texto flua ao redor da imagem
    marginRight: "20px",  // Espaço entre a imagem e o texto
    marginBottom: "20px",  // Espaço abaixo da imagem
  };
  return (
    <div className="container col-12 d-flex justify-content-center position-relative ">
      <img className="img-fluid bg-danger " src={myImage} style={myPicture} alt="Imagem do desenvolvedor" />
      </div>
  );
}




export default PhotoObject;
