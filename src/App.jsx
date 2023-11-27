import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import {Home} from "./Pages/Home"
import {Login} from "./Pages/Login"

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
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
