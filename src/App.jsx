import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Course from "./components/Course";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./components/Contact";
import PaymentPage from "./components/PaymentPage";
import About from "./components/About";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/About" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
