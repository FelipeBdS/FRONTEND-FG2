import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import {Home} from "./Pages/Home"
import {Login} from "./Pages/Login"
<<<<<<< HEAD
import {RegistroUsuario} from "./Pages/RegistroUsuário"
=======
import  RegistroUsuario  from './Pages/RegistroUsuario'
import Sobre from "./Pages/Sobre";
import Marcas from './Pages/Marcas'
>>>>>>> 590faa1 (MarcaComponent)

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
<<<<<<< HEAD
=======
  {
    path: "sobre",
    element: <Sobre />,
  },
  {
    path: "marcas",
    element: <Marcas />,
  },
>>>>>>> 590faa1 (MarcaComponent)
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
