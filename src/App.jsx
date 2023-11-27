import GlobalStyles from "./GlobalStyles/GlobalStyles";
import Home from "./Pages/Home";
import Login from './Pages/Login'; 
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <>
      <GlobalStyles />
      <Routes>
        <Route path='/FG2-OFICIAL' element={<Login />} />
        <Route path='/FG2-OFICIAL/home' element={ <Home />} />
      </Routes>
      </>
    
  );
}

export default App;
