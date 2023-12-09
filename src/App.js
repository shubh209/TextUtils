// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';
import Alert from "./Components/Alert";
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  // for Dark / Light mode
  const [mode, setMode] = useState("light")

  // To set alert 
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type)=> {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled!", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled!", "success")
    }
  }


  return(
    <>
      <Alert alert={alert}/>
        <div className='container my-3'>
      {/* <switch> */}  
          <Router>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
            <Routes>
              <Route exact path="/about" element={<About  mode={mode}/>} />
              <Route exact path="/" element= {<TextForm heading="Enter the Text To Analyze" mode={mode}/>} /> 
            </Routes>
          </Router>
      {/* </switch> */}
        </div>
    </>
  );
}

export default App;
