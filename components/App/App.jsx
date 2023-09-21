import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Main, SecondPage } from "../../pages";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Header/>}>
            <Route path="/" element={<Main/>} />
            <Route path="/second-page" element={<SecondPage/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
