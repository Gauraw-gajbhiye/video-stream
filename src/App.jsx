import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <>
      <div className="h-screen bg-black">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<MainContainer />} />
              <Route path="watch" element={<WatchPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
