import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import MyAbilities from "./Pages/MyAbilities";
import MyProjects from "./Pages/MyProjects";

const router = createBrowserRouter([
  {
    path: "/Portifolio-Antigo",
    element: <Home />,
  },
  {
    path: "/Portifolio-Antigo/SobreMim",
    element: <AboutMe />,
  },
  {
    path: "/Portifolio-Antigo/Habilidades",
    element: <MyAbilities />,
  },
  {
    path: "/Portifolio-Antigo/Projetos",
    element: <MyProjects />,
  },
]);

export default router;
