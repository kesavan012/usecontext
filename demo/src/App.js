import Navbar from './Components/Navbar.js';
import Content from './Components/Content.js';
import Footer from './Components/Footer.js';
import {useState} from 'react'
import {CreContext} from '../src/Context/CreContext.js';

function App() {
  const [color,setColor] = useState("black")
  const [color1,setColor1] = useState("white")
  const [color2,setColor2] = useState("black")
  const [fontColor,setFontcolor] =useState("white")
  const [fontColorbody,setFontcolorbody] =useState("black")

  function navColor(){
    if(color==="black"){
      setColor("aqua")
      setColor1("black")
      setColor2("aqua")
      setFontcolor("black")
      setFontcolorbody("white")
    }
    else{
      setColor("black")
      setColor1("white")
      setColor2("black")
      setFontcolor("white")
      setFontcolorbody("black")
    }
   
  }

  return (
    <div className="App">
      <CreContext.Provider value={{navColor,color,color1,color2,fontColor,fontColorbody}}>
        <Navbar />
        <Content />
        <Footer />

      </CreContext.Provider>
      
    </div>
  );
}

export default App;
