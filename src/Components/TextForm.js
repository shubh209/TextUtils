
import React, {useState} from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {

  // Convert To Upper Case
  const handleUpClick = ()=> {
    let newText = text.toUpperCase();   
    setText(newText)
  }

  // Convert To Lower Case
  const handleLowClick = ()=> {
    let newText = text.toLowerCase();   
    setText(newText)
  }

  // Convert To Binary Number
  const handleBinary = ()=> {
    var length = text.length,
    output = [];
    for (var i = 0; i < length; i++) {
      var bin = text[i].charCodeAt().toString(2);
      output.push(Array(8-bin.length+1).join("0") + bin);
    } 
    let newText = output.join(" ");   
    setText(newText)
  }

  // To Copy Text
  const handleCopy = ()=> {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
  }

  // To Clear Text
  const handleClearText = ()=> {
      let newText = "";   
      setText(newText)
  }

  // To Remove Extra Spaces, used redux
  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ] + /)
    setText(newText.join(" "))
  }

  // So that you can Write in The Block
  const handleOnChange = (event)=> {
    setText(event.target.value)
  }


  // Use state created
  const [text, setText] = useState("");
      // text = "abcd" wrong way to change state
      // setText ("abcd") correct way 


  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white', color: props.mode==='dark' ? 'white' : '#042743'}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleBinary}>Convert to Binary Code</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
    </div>

    
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
      <h2>Your Text Summary</h2>
      {/* to show the word count ...... */}
      {/* when nothing is written it will show 0 words */}
      {/* split(" "), it won't work when we click enter and go on a new line, it will still show the no, of words written in the first line */}
      <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.split(/\s+/).length} characters</p>
      {/* if no words are written then 0 minutes read should come, we achieve from the below code */}
      <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview" }</p>
    </div>
    </>
  )
}
