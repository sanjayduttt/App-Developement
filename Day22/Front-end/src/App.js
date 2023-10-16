import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { States } from "./Components/States";
import Login from "./Components/loginPage";
import Signup from "./Components/signup";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ThingsToDo from "./Components/ThingsToDo";
import Hellobar from "./Components/Hellobar";
// import About from "./Components/About";
import TourPlanner from "./Components/TourPlanner";
import HotelList from "./Components/HotelList";
import BookingPage from "./Components/Booking";
import FAQ from "./Components/FAQ";
import FeedbackForm from "./Components/FeedBackForm";
import PrivacyPolicy from "./Components/PrivatePolicy";
import TermsConditions from "./Components/Terms";
import AdminLogin from "./Components/Adminlogin";
import AdminHome from "./Components/AdminHome";
import Pay from "./Components/pay";
import PaymentConfirmation from "./Components/Donepage";
import Contact from "./Components/Contact";
import AddSpot from "../src/Components/Pages/AddSpot";
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
            {/* <Route path="/AboutPage" element={<About/>}></Route> */}
            <Route path="/contactpage" element={<Contact/>}></Route>

            <Route path="/trippage" element=
            {
              <>
              <Hellobar />
              <TourPlanner />
              </>
            }></Route>

            <Route path="/hotelpage" element={<> <Hellobar/>   <HotelList /></>}></Route>
            <Route path="/bookingpage" element={  <><Hellobar/>  <BookingPage /></> }></Route>
            <Route path="/faq" element={ <>   <Hellobar/>   <FAQ /></>}></Route>
            <Route path="/feedbackpage" element={<FeedbackForm />}></Route>
            <Route path="/policypage" element={ <>  <Hellobar/>    <PrivacyPolicy /></>}></Route>
            <Route path="/termspage" element={  <><Hellobar/>   <TermsConditions /></>}></Route>
            <Route path="/paypage" element={ <Pay />}></Route>
            <Route path="/Done" element={ <PaymentConfirmation />}></Route>
            <Route path="/Addspot" element={ <AddSpot />}></Route>

            {/* <Route path="/Adminlogin" element={<AdminLogin />}></Route> */}
            <Route path="/AdminHome" 
            element={
              <>
                
                <AdminHome/>
              </>
              }

            ></Route>
            {/* <Route path="/empty" element={< Adminbar/>}></Route> */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            >

            </Route>

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
