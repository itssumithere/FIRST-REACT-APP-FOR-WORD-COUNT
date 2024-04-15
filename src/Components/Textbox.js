import React,{useState} from 'react'

export default function Textbox(props) {

    const handleonchange = (event) =>{
        console.log("onchange");
        setText(event.target.value);
        

    };
    
    const handleonclick = () =>{
        console.log("onclick");
       setText(text.toUpperCase());
       props.showAlert("change to uppercase","sucess")

    };
    const tolower = () =>{
        console.log("onclick");
       setText(text.toLowerCase());
       props.showAlert("change to lowercase","sucess")

    };
    const tocopy = () =>{
        const text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
       props.showAlert("copy the text","sucess")

    };

    const[text,setText] = useState("enter the text here");
    return (
        <div className={`bg-${props.mode}`}>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" value ={text} onChange={handleonchange}></textarea>
                <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleonclick} >convert to upercase</button>
                <button type="button" className="btn btn-success my-3 mx-3" onClick={tolower}>covert to lower</button>
                <button type="button" className="btn btn-success my-3 mx-3" onClick={tocopy}>copy the text</button>
            </div>
            <div className="conatiner my-3">
            <h1>the summuary of paragraph</h1>
            <p>{text.split(" ").filter((t)=>t!=="").length} no. of words and {text.length} no. of characters</p>
            </div>
            <h1>preview</h1>
            <div className="container">
               {text} 
            </div>
        </div>
    )



}
