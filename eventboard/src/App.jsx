import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Logout from "./components/Logout";
import User from "./components/User";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Event from "./components/Event";
import ReadEvents from "./pages/ReadEvents";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter and Routes

function App() {
  const { isAuthenticated } = useAuth0();
  return (
      <div style={{ backgroundColor: '#f3f9fb' }}>
        <Nav />
        <Routes>
          <Route path='/' element={<ReadEvents />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
  );
}

export default App;
