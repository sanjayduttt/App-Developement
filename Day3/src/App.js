//import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Login from "./Components/login";
import Signup from "./Components/signup";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>


      </Routes>

    
    </div>
 </BrowserRouter>
  );
}

export default App;
