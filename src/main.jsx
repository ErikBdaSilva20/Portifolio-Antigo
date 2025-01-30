import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { BrowserRouter } from "react-router-dom";
import router from "./routes.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter basename="/Minha_Pag_Portifolio"> {/* Define o basename do site */}
      <RouterProvider router={router} />
    </BrowserRouter>
  </StrictMode>
);
