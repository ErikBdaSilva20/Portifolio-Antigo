import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import MyAbilities from "./Pages/MyAbilities";
import MyProjects from "./Pages/MyProjects";

const router = createBrowserRouter([
  {
    path: "/Meu_Portifolio",
    element: <Home />,
  },
  {
    path: "/Meu_Portifolio/SobreMim",
    element: <AboutMe />,
  },
  {
    path: "/Meu_Portifolio/Habilidades",
    element: <MyAbilities />,
  },
  {
    path: "/Meu_Portifolio/Projetos",
    element: <MyProjects />,
  },
]);

export default router;
