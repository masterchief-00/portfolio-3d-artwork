import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route>404, NOT FOUND!</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
