import About from "../../About/About";
import Login from "../../Login/Login";
import Services from "../../Services/Services";
import Signup from "../../Signup/Signup";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
