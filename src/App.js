import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Filter from "./pages/filter";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Filter />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}sdsadasdsfsdkfsdf

export default App;
