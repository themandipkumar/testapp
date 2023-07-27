// import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
  console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to Uppercase", "Success");
  }

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "Success");
    }

  const handleOnChange = (event) =>{
    console.log("On Change"); // ye console ko ham remove v kar skte hai
    setText(event.target.value);
}

  const [text, setText] = useState('');
  return (
    <>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
     <label for="myBox" className="form-label">Type Text Here For Change Format</label>
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',
     color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
     </div>
     <button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert to upper case</button>
     <button className="btn btn-primary my-2" onClick={handleLoClick}>Convert to Lower case</button>
     </div>
     <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>Your Text Summary</h1>
     <p> {text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter text here for preview it"}</p>

     </div>
    </>
  )
}