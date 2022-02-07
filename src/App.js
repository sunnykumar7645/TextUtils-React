import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import{
BrowserRouter as Router,
Route,
Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] =useState(null);

  const showAlert = (message, type) =>{

    setAlert({
      msg : message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
 
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#263238";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark mode";
      // setInterval(() => {
      //   document.title = "Textutils is  amazing.";
      // }, 3000);
      // setInterval(() => {
      //   document.title = "install Textutils Now"; for showing title highlights.
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - light mode";
    }
  }

  return (
    <>
      {/*   
      <Alert alert = {alert}/>
     
      <TextForm showAlert = {showAlert} heading = "Enter The Text Here To Analyze" mode={mode} mBtnMode={mode}/>
      <About /> */}




      <Router>
        <Navbar title ="TextUtils" about ="About Us" mode = {mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="TextUtils-React/about"  element={ <About/> }  />
          <Route path = "TextUtils-React/" element={<TextForm showAlert = {showAlert} heading = "Enter The Text Here To Analyze" mode={mode} mBtnMode={mode}/>} />
          <Route path = "TextUtils-React/textform" element={<TextForm showAlert = {showAlert} heading = "Enter The Text Here To Analyze" mode={mode} mBtnMode={mode}/>} />
        </Routes>
      </Router>
       

    
    </>
  );
}

export default App;
