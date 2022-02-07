import React, {useState} from 'react'

function TextForm(props) {
  const handleupclick = () =>{
    // console.log("this is been clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLoClick = () =>{
    // console.log("this is been clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");

  }

  const handleOnChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
    

  }

  const handleReverseClick = () => {
  
  let len = text.length;
  let str ="";
  for (let i = 0; i < len; i++) {
     str += text[len-1-i];
  }
  setText(str);
  props.showAlert("Paragraph has been reversed", "success");

    
  }
  const handleRemoveSpaceClick = () =>{

    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed", "success");


    
  }
  const handleClearClick = () =>{

    let str = "";
    setText(str);
    props.showAlert("Text box has been cleaned", "warning");

  }
  const handleCopyClick = () =>{
    let text1=document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    props.showAlert("Paragraph has been capied", "success");


  }   

  
  const [text, setText] = useState("");

  return (
    <>     
      <div className="container"> 
        <div className="mb-3">
            <h1 className='m-4' style={{color:props.mode === "light"? "black" : "white", textAlign: 'center'}}>{props.heading}</h1>
            <label htmlFor="lebel"  style={{color:props.mode === "light"? "black" : "white"}} className="form-label">Enter your text below</label>
            <textarea className="form-control m-2" 
              style={
                {backgroundColor: props.mode === "light"? "white" : "#424242", 
                color:props.mode === "light"? "black" : "white",
                }
              } value={text} onChange={handleOnChange} id="myBox" rows="8">
            </textarea>
        </div>
        <button type="button" onClick={handleupclick} className={`btn btn-${props.mBtnMode === "light"? "success":"primary"} mx-3 my-1`}>Convert to UpperCase</button>
        <button type="button" onClick={handleLoClick} className={`btn btn-${props.mBtnMode === "light"? "success":"primary"} mx-3 my-1`}>Convert to LowerCase</button>
        <button type="button" onClick={handleReverseClick} className={`btn btn-${props.mBtnMode === "light"? "success":"primary"} mx-3 my-1`}>Reverse String character </button>
        <button type="button" onClick={handleRemoveSpaceClick} className={`btn btn-${props.mBtnMode === "light"? "success":"primary"} mx-3 my-1`}>Remove Extra Space</button>
        <button type="button" onClick={handleClearClick} className={`btn btn-${props.mBtnMode === "light"? "success":"primary"} mx-3 my-1`}>Clear Text</button>
        <button type="button" onClick={handleCopyClick} className={`btn btn-${props.mBtnMode === "light"? "success":"primary"} mx-3 my-1`}>cpoy</button>


      </div>
      <div className="container my-5 ">
        <div className="container my-5 ">
          <h2 style={{color:props.mode === "light"? "black" : "white"}}>Text Summary</h2> 
          <p style={{color:props.mode === "light"? "black" : "white"}}>  {(text.split(" ").filter((element)=>{ return element.length!==0; }).length)} words and {text.length} character  </p>
          <p style={{color:props.mode === "light"? "black" : "white"}}>{text.length * 0.008} minutes will take to read </p>
          <h2 style={{color:props.mode === "light"? "black" : "white"}}>Preview</h2>
          <p style={{color:props.mode === "light"? "black" : "white"}}>{text.length>0 ? text :"Enter the text above ni the box to preview."}</p>
        </div>
      </div>

    </>

  )
}

export default TextForm
