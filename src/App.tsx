
import {  Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/HomePage";
import Detailpage from "./pages/DetailPage/Detailpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail" element={<Detailpage />} /> 
      </Routes>
    </Router>
  )

}
export default App;