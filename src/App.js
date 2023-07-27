import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'; 
import React, {useState} from 'react';
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, About, Routes, Route, Link } from "react-router-dom";

let name = "MandipisLive FT"

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable is not
  const[alert, setAlert] = useState(null);+

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
    setTimeout(()=>{
      setAlert(null);
    },6000);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'MandipisLive - Dark Mode';
      //titles ko chamkane ke liye below code
      setInterval(()=> {
        document.title = 'MandipisLive';
      },2500);
      setInterval(()=> {
        document.title = 'FameTechz App Install';
      },1500);

    }
    else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled","success");
    document.title = 'MandipisLive - Light Mode';
    }
  }
  return (
  <>
   
      <Navbar title="MandipisLive" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter the Text for analyz" />
       
      {/* <Routes>
         <Route exact path='/' element = {<TextForm showAlert={showAlert} heading="Welcome To MandipisLive" mode={mode}/>} />
         
         <Route exact path ="/about" element = {<About/>} />
        
      </Routes>

      {/* <div className="container my-3"> <About/> </div> */}
  

  </>
  );
}

export default App;

  //  <BrowserRouter> ese upp and niche pahna dena hai for routing
