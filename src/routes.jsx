import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import MyAbilities from "./Pages/MyAbilities";
import MyProjects from "./Pages/MyProjects";

const router = createBrowserRouter([
  {
    path: "/Minha_Pag_Portifolio",
    element: <Home />,
  },
  {
    path: "/Minha_Pag_Portifolio/SobreMim",
    element: <AboutMe />,
  },
  {
    path: "/Minha_Pag_Portifolio/Habilidades",
    element: <MyAbilities />,
  },
  {
    path: "/Minha_Pag_Portifolio/Projetos",
    element: <MyProjects />,
  },
]);

export default router;
