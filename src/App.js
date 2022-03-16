import React, { useState } from "react";
import MyStatefulEditor from "./editor";
import EditorConvertToHTML from "./editor2";
function App() {

  const [texto, setTexto] = useState('')

  const handleText = (data)=>{
    setTexto(data)
    console.log(data)
  }
  return (
    <div style={{width: '400px', margin: 'auto', height: '500px', border: '3px solid red'}}>
      <EditorConvertToHTML />

      <p>{texto}</p>
    </div>
  );
}

export default App;
