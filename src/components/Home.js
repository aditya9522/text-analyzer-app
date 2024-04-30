import React, { useState } from "react";

export default function LoginForm(props) {
  const [text, setText] = useState("");          // useState (React Hook)

  const ConvertToUpper = () => {
    let UpperText = text.toUpperCase();
    setText(UpperText);
    if (text){
      props.displayAlert('The text letters converted into uppercase.', 'success')
    } else {
      props.displayAlert('Please write something to perform this operation.', 'warning')
    }
  };

  const ConvertToLower = () => {
    let UpperText = text.toLowerCase();
    setText(UpperText);
    if (text){
      props.displayAlert('The text letters converted into lowercase.', 'success')
    } else {
      props.displayAlert('Please write something to perform this operation.', 'warning')
    }
  };

  const RemoveWhiteSpace = () => {
    let UpperText = text.replace(/\s+/g, " ").trim();
    setText(UpperText);
    if (text){
      props.displayAlert('White Spaces has been removed successfully.', 'success')
    } else {
      props.displayAlert('Please write something to perform this operation.', 'warning')
    }
  };
    
  const firstLetterUpper = (theString) => {
    return theString.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()});
  };

  const SentenceCase = () => {
    let newString = firstLetterUpper(text);
    setText(newString)
    if (text){
      props.displayAlert('The text converted into sentence case.', 'success')
    } else {
      props.displayAlert('Please write something to perform this operation.', 'warning')
    }
  };   

  const ExtractDigits = () => {
    try {
      const digits = text.match(/\d/g).join('');
      setText(digits);
      props.displayAlert('Digits are extracted successfully.', 'success')
      
    } catch (error) {
      props.displayAlert('The text does not contain digits.', 'warning')
    }
  };   

  const ReverseText = () => {
    let newText = '';
    for (let index = text.length - 1; index >= 0; index--) {
        newText = newText + text[index];
    }
    setText(newText);
    if (text){
      props.displayAlert('The text has been reversed.', 'success')
    } else {
      props.displayAlert('Please write something to perform this operation.', 'warning')
    }
  };

  const ClearText = () => {
    if (text){
      setText('');
      props.displayAlert('The text cleared successfully.', 'success')
    } else {
      props.displayAlert('Please write something to perform this operation.', 'warning')
    }
  };
  
  const ExtractLink = () => {
    let UpperText = text.match(/https?:\/\/[^\s]+/); 
 
    if (UpperText) {
      setText(UpperText[0]);
      props.displayAlert('Link extracted successfully.', 'success')
  } else {
      setText(text);
      props.displayAlert('The text does not contain links.', 'warning')
    }
  };
  
  const CopyText = () => {
    if (text) {
      let text = document.getElementById('myBox');
      text.select()
      navigator.clipboard.writeText(text.value);
      window.getSelection().removeAllRanges()                      // to remove Selected Area or text
      props.displayAlert('The text copied successfully.', 'success')
    } else {
      props.displayAlert('Please write something to perform this operation.', 'warning')
    }
  };
  
  const PasteText = async () => {
    try {
      const result = await navigator.clipboard.readText();
      setText(document.getElementById('myBox').value + result);
    } catch (error) {
      document.getElementById('myBox').focus();
      let result = document.execCommand('paste');
      document.getElementById('myBox').value += result;
    }
    props.displayAlert('The text pasted successfully.', 'success');
  };

  const onChangeTextBox = (event) => {
    setText(event.target.value);
  };

  const DownloadText = () => {
    if (text){
      const link = document.createElement("a");
      const content = document.getElementById('myBox').value;
      const file = new Blob([content], { type: 'text/plain' });
      link.href = URL.createObjectURL(file);
      link.download = "sample.txt";
      link.click();
      URL.revokeObjectURL(link.href);
      props.displayAlert('The text is downloading in the background', 'info');

    } else {
      props.displayAlert('Please write something to perform this operation.', 'warning');
    }
  };

  return (
    <>
      <div className="container my-4">
        <h5>Your TextBox</h5>
        <textarea
          className={`form-control my-2 text-${props.mode === 'light' ? 'dark':'light'}`}
          style={{backgroundColor: props.mode === 'dark' ? '#121225':'white'}}
          placeholder="Enter text here..."
          id="myBox"
          rows="8"
          cols="10"
          value={text}
          onChange={onChangeTextBox}
        ></textarea>
        <h5 className="mt-4">Text Based Operation</h5>
        <div className="p-3 border rounded my-2" style={{borderColor: props.mode === 'light' ? 'dark':'light'}} id='text-manupulation' >
          <button className="btn btn-success m-1" onClick={ConvertToUpper}>
            Upper Case
          </button>
          <button className="btn btn-success m-1" onClick={ConvertToLower}>
            Lower Case
          </button>
          <button className="btn btn-success m-1" onClick={ClearText}>
            Clear Text
          </button>
          <button className="btn btn-success m-1" onClick={SentenceCase}>
          Sentence Case
          </button>
          <button className="btn btn-success m-1" onClick={ReverseText}>
          Reverse Text
          </button>
          <button className="btn btn-success m-1" onClick={RemoveWhiteSpace}>
          Remove WhiteSpace
          </button>
          <button className="btn btn-success m-1" onClick={ExtractDigits}>
            Extract Digits
          </button>
          <button className="btn btn-success m-1" onClick={ExtractLink}>
            Extract Link
          </button>
          <button className="btn btn-success m-1" onClick={CopyText}>
            Copy Text
          </button>
          <button className="btn btn-success m-1" onClick={PasteText}>
            Paste Text
          </button>
          <button className="btn btn-success m-1" onClick={DownloadText}>
          Download Text
          </button>
        </div>
        <div className="mt-4">
          <h5>Text summery</h5>
          <p>
            Charactor: {text.length}
            <br />
            Word: {text.trim() === "" ? 0: text.split(/\s+/).filter((ele) => ele !== '').length }                    {/* Here /\s+/  is a regular expression used to select space also new line. In this \n count as extra space */}
            <br />
            Reading Time: {text === "" ? 0: 0.005 * text.split(/\s+/).filter((ele) => ele !== '').length} Minutes
          </p>
          <h5 id="preview">Preview </h5>
          <p>{text.length > 0 ? text:'Enter something in the text box to display the preview.'}</p>
        </div>
      </div>
    </>
  );
}
