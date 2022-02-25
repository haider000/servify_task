import React from "react"
import Landing from "./Pages/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {AppContext} from "./utils/ContextWrapper"
import "./App.css";


function App() {
  const context = React.useContext(AppContext);
  return (
    <div className={`font-[Montserrat] ${context.bgColor} box-border`}>
        <Navbar />
        <Landing />
        <Footer />
    </div>
  );
}

export default App;
