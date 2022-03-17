import "./WordForm.css";
const WordForm = ()=>{
    return <div className="mainDiv">
        
     <div className="wordDiv">
           <img  src="/pexels-skitterphoto-695571.jpg" alt="" />
    </div>
    <div className="inputDiv" >
        <input type="text" placeholder="Enter Word"/>
        <input type="number" placeholder="Enter Count"/>
    </div>
    <div className="rightDiv">
        <button>Submit</button>
    </div>
    </div>
}

export default WordForm;