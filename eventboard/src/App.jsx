// App.js
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Logout from "./components/Logout";
import User from "./components/User";
import Login from "./components/Login";
import ReadEvents from "./pages/ReadEvents";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <p>Login.</p>
          <Login />
        </div>
      ) : (
        <div>
          <ReadEvents />
          <Logout />
          <User />
        </div>
      )}
    </div>
  );
}

export default App;