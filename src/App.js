import './App.css';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import About from './Components/About';
import Alert from './Components/Alert.js'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#212529"
      document.body.style.color = "white"
      showAlert("dark mode is on ", "sucess")
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode is on ", "sucess")
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }


  return (
    <div>
      <Router>
          <Navbar title="textedit" mode={mode} tMode={toggleMode} />
          <Alert message alert={alert}></Alert>
          <Routes>
           <Route path="/about" element={<About />}>
           </Route>
          <Route path="/" element={<div className="container" >
            <Textbox showAlert={showAlert} ClassName="my-3" title="write the text here" mode={mode} />
          </div>}>
          </Route>
          </Routes>
      </Router>
    </div>

  );
}

export default App;
