import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import {Home} from "./Pages/Home"
import {Login} from "./Pages/Login"
import  RegistroUsuario  from './Pages/RegistroUsuario'
import Sobre from "./Pages/Sobre";
import Marcas from './Pages/Marcas'
import { UserProvider } from './Contexts/UserContext'

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

  {
    path: "sobre",
    element: <Sobre />,
  },
  {
    path: "marcas",
    element: <Marcas />,
  },

],{basename: "/FRONTEND-FG2/"})


function App() {
  return (
      <>
       <UserProvider>
       <GlobalStyles />
       <RouterProvider router={router} />
       </UserProvider>
      </>
    
  );
}

export default App;
