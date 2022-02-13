import React ,{ useState } from 'react';

import './App.css';
// import About from './Componenets/About';
import Alert from './Componenets/Alert';
import Navbar from './Navbar';
import Textitems from './Textitems';
// import {
//   BrowserRouter as Router,
//   Link,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {

  const [mode,setmode]= useState('light');
  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>{
      setalert({
        message:message,
        type:type
      },
      setTimeout(() => {
        setalert(null)
      },2000)
      )
  }



  const toggle=()=>{
    if(mode==='light')
    {
      setmode('dark');
      
      document.body.style.backgroundColor='rgb(32 39 72)';
      showalert("dark mode enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode enabled","success");
    }
  }


  return (
   <>
  

  
<div className="container">
<Navbar title="Text Converter" mode={mode} toggle={toggle} about="I am learning "/>
              <Alert alert={alert} ></Alert>
<Textitems heading="Enter text to analyze"  mode={mode} showalert={showalert} />
        {/* <Router>    
          <Navbar title="Ayush website" mode={mode} toggle={toggle} about="I am learning "/>
              <Alert alert={alert} ></Alert>
          <Routes>
        
            <Route path="/About" element={<About />}>
            </Route>
            <Route path="/" element={<Textitems heading="Enter text to analyze"  mode={mode} showalert={showalert} />}>
            </Route>
          </Routes>
        </Router> */}
        </div>





   </>
  );
}

export default App;

