import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { States } from "./Components/States";
import Login from "./Components/loginPage";
import Signup from "./Components/signup";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ThingsToDo from "./Components/ThingsToDo";
import Hellobar from "./Components/Hellobar";
import About from "./Components/About";
import TourPlanner from "./Components/TourPlanner";
// import Help from "./Components/Help";
function App() {
  return (
    <BrowserRouter>
      <States>
        <div className="App">
          <Routes>
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            ></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/thingsToDo" element={<ThingsToDo />}></Route>
            <Route path="/AboutPage" element={<About />}></Route>
            <Route path="/trippage" element={<TourPlanner />}></Route>
            {/* <Route path="/help" element={<HelpPage />}></Route> */}

            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            ></Route>

            <Route
              path="/home"
              element={
                <>
                  <Hellobar />
                  <Home />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </States>
    </BrowserRouter>
  );
}

export default App;
