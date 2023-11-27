import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import {Home} from "./Pages/Home"
import {Login} from "./Pages/Login"
import {RegistroUsuario} from "./Pages/RegistroUsuário"

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "cadastro",
    element: <RegistroUsuario />,
  },
],{basename: "/FRONTEND-FG2/"})


function App() {
  return (
      <>
       <GlobalStyles />
       <RouterProvider router={router} />
      </>
    
  );
}

export default App;
