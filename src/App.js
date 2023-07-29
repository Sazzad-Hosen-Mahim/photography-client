import "./App.css";
import { RouterProvider } from "react-router-dom";
import Head from "./component/Head/Head";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import router from "./component/Router/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
