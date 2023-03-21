import Home from "./components/Home";
import Payment from "./components/Payment";
import Navbar from "./components/Navbar";
import {Route,Routes} from "react-router-dom";




function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        
      <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
    
  )
}

export default App;