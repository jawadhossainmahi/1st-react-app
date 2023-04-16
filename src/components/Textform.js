import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        
        let new_text = text.toUpperCase()
        setText(new_text)
        props.showAlert('Converted to UpperCase',"success")
    }
    const handleLowClick = () => {
   
        let new_text = text.toLowerCase()
        setText(new_text)
        props.showAlert('Converted to LowerCase',"success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    let x
    if (text.length == 0) {
        x = 0
    }
    else {
        x = text.split(" ").length
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    <label htmlFor='' className="form-label">Write something</label>
                    <textarea className="form-control" value={text} name="" onChange={handleOnChange} id="" rows="8" style={{ backgroundColor: props.mode === "dark" ? "gray" : "white",color:props.mode==="dark"?"white":"black",cursor:"default"}}></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary ">Convert to Uppercase</button>
                <button onClick={handleLowClick} className="btn btn-primary mx-5 ">Convert to Lowercase</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h4>Your text summary</h4>
                <p>{x} words and {text.length} characters</p>
                <p>{0.1 * (text.split(" ").length - 1)} sconds will take to read</p>
                <h6>Preview</h6>
                <p>{text.length>0?text:"Nothing entered in the box"}</p>
            </div>
        </>
    )
}
