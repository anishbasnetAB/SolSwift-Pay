import Home from "./components/Home";
import Payment from "./components/Payment";
import Navbar from "./components/Navbar";
import {Route,Routes} from "react-router-dom";




function App() {

  return (
    <div className="bg-main">
      <Navbar/>
      <Routes>
        
      <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
    
  )
}

export default App;