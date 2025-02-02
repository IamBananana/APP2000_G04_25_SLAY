import React, { useEffect, useState } from "react";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Spill from "./spill/spill";
import Register from "./register/register";
import Login from "./login/login";
import ClubPage from "./clubPage/clubPage";
import MyProfile from "./myProfile/myProfile";
import Kontakt from "./kontakt/kontakt";
import OmOss from "./omOss/omOss";
import axios from "axios";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const navLinks = [
    { name: "Hjem", href: "/" },
    { name: "Om oss", href: "/omOss" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Spill", href: "/spill" },
    { name: "Mitt lag", href: "/lag" },
    { name: "Min side", href: "/minSide" },
    { name: "Login", href: "/login" },
    { name: "Registrer", href: "/register" },
  ];

  useEffect(() => {
    // Example of calling the backend API when the component mounts
    axios
      .get("http://localhost:5000/api/hello") // Change this to your API endpoint
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <AppNavbar links={navLinks} />
      <div className="main-content">
        <h1>{message}</h1> {/* Display message from backend */}
        <Routes>
          {/* Definer hovedrutene */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spill" element={<Spill />} />
          <Route path="/lag" element={<ClubPage />} />
          <Route path="/minSide" element={<MyProfile />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/omOss" element={<OmOss />} />

          {/* Fallback-rute for ikke-gjenkjente ruter */}
          <Route path="*" element={<div>404 - Page not found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
