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
import HotelList from "./Components/HotelList";
import BookingPage from "./Components/Booking";
import FAQ from "./Components/FAQ";
import FeedbackForm from "./Components/FeedBackForm";
import PrivacyPolicy from "./Components/PrivatePolicy";
import TermsConditions from "./Components/Terms";
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
            <Route path="/hotelpage" element={<HotelList />}></Route>
            <Route path="/bookingpage" element={<BookingPage />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/feedbackpage" element={<FeedbackForm />}></Route>
            <Route path="/policypage" element={<PrivacyPolicy />}></Route>
            <Route path="/termspage" element={<TermsConditions />}></Route>
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