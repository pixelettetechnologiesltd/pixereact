import "./assets/css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register, Department, Login, Attendence, Home, Holiday } from "./routes/route";
import Navbar from "./Layout/Navbar";
import Protectedroute from "./Components/utils.js/ProtectedRoute";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Navbar />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/department" element={<Department />}></Route>
            <Route path="/attendence" element={<Attendence />}></Route>
            <Route path="/holiday" element={<Holiday />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
