
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


function App() {
  const [mode, setDarkMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleMode = () => {
    // if (theme === "dark") {
    if (mode === 'light') {
      setDarkMode('dark')
      document.body.style.backgroundColor = "#001838"
      showAlert("dark mode has been enebled", "success")
    }

    else {
      setDarkMode('light')
      showAlert("light mode has been enebled", "success")
      document.body.style.backgroundColor = "white"
    }
    // }
  }
  const toggleGreenMode = () => {
    if (mode === 'light') {
      setDarkMode('green')
      document.body.style.backgroundColor = "green"
      showAlert("green mode has been enebled", "success")
    }

    else {
      setDarkMode('light')
      showAlert("light mode has been enebled", "success")
      document.body.style.backgroundColor = "white"
    }
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:    <Textform showAlert={showAlert} heading="Enter the text to analize" mode={mode} /> ,
  //   },
  //   {
  //     path: "/home",
  //     element:  <Textform showAlert={showAlert} heading="Enter the text to analize" mode={mode} /> ,
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>
  //   },
  // ]);

  return (
    <>


        <Navbar title="textDOne" about='About Us' mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} />
        <Alert alert={alert} />
        <div className="contianer my-3">
        {/* <RouterProvider router={router}></RouterProvider> */}
        <Textform showAlert={showAlert} heading="Enter the text to analize" mode={mode} /> 
        </div >
   

    </>
  );
}

export default App;
