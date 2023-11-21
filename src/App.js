import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./pages/movie/index.jsx";
import HomePage from "./pages/home/index.jsx";

function NotFound() {
  return <h1>404 Not Found</h1>;
}
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
