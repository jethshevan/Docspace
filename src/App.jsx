import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Booking from "./pages/Booking";
import Doctor from "./pages/Doctor";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import AdminView from "./data/AdminView";
import Login from "./pages/Login";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Angela",
      lastName: "Black",
      userName: "angelablack",
      email: "angela@gmail.com",
      password: "abcd",
    },
    {
      id: 2,
      firstName: "Jandhi",
      lastName: "Hola",
      userName: "jandhihola",
      email: "jandhi@gmail.com",
      password: "abcd",
    },
    {
      id: 3,
      firstName: "Ashan",
      lastName: "Dulith",
      userName: "ashandulith",
      email: "ashan@gmail.com",
      password: "abcd",
    },
    {
      id: 4,
      firstName: "Grey",
      lastName: "Hilton",
      userName: "greyhilton",
      email: "grey@gmail.com",
      password: "abcd",
    },
    {
      id: 5,
      firstName: "Alexa",
      lastName: "Fernando",
      userName: "alexafernando",
      email: "alexa@gmail.com",
      password: "abcd",
    },
  ]);

  const [loggedInUser, setLoggedInUser] = useState(null); // State to store the logged-in user

  const addUser = (newUser) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...newUser, id: prevUsers.length + 1 },
    ]);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/book" element={<Booking />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/profile" element={<Profile user={loggedInUser} />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminView users={users} />} />
          <Route
            path="/register"
            element={<RegisterForm addUser={addUser} />}
          />
          <Route
            path="/login"
            element={<Login users={users} setLoggedInUser={setLoggedInUser} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
