import React , {useState} from 'react';

export default function Textitems(props) {    
   const [text, setText] = useState("");
        
     const onchangehandle=(event)=>{
       setText(event.target.value);
        // console.log("cliked change");
      }  
      const onclikedclear=()=>{
        props.showalert("Clear text !! ","success");
       
        setText("");
      }     
      const onclikedlow=()=>{
        let newtext=text.toLowerCase();
       
        setText(newtext);
        props.showalert("Converted to Lowercase ","success");
      }            
      const oncliked=()=>{
        let newtext=text.toUpperCase();
        // console.log("clicked to uppercase");
        setText(newtext);
        props.showalert("Converted to Uppercase ","success");
      }    
    //  let  count=( text)=>{
    //     if(text.length()===0)
    //     return 0 ;
    //     else 
    //     return text.trim().split(" ").length;
      
    //   }                 
  return (   
  <>    <div style={{color: props.mode==='light'?'black':'white'}}>
   <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.head}</h1> 
  
<div className="mb-3">
 <textarea className="form-control" value={text}  onChange={onchangehandle}  style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='light'?'black':'white'}}  id="exampleFormControlTextarea1" rows="12"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={oncliked}>Converter to uppercase</button>
<button className="btn btn-primary mx-2" onClick={onclikedlow}>Converter to lowercase</button>
<button className="btn btn-primary" onClick={onclikedclear}>Clear</button>
    </div>
    
    <div className="mb-2" style={{color: props.mode==='light'?'black':'white'}} className="container">
      <h2 className="my-5" >Text summary </h2>
      <p >{text.length} characters & {text.trim().split(" ").length} words </p>

    </div>
    <div style={{color: props.mode==='light'?'black':'white'}} className="container">
      <h2 className="my-5">Text preview </h2>
      <p>{text}</p>
      
    </div>
    </>



  );
}

