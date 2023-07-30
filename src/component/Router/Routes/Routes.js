import About from "../../About/About";
import Services from "../../Services/Services";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../../layout/Main");
const { default: Home } = require("../../Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
    ],
  },
]);

export default router;
