import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import View from "./Pages/View";

function App() {
  return (
    <div>
      <h1>Restaurant Listing</h1>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/view/:id" element={<View/>}></Route>          
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
