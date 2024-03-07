import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
