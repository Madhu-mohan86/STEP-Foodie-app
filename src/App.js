import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Restaurantpage from "./Pages/Restaurantpage";
import Login from "./Pages/Login";
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Restaurantpage/>} />
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
