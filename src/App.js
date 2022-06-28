import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Error from "./pages/Error/";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="*" element={<Error />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
