import React from "react";
import "../styles/Global.css";




  

function ImageCard(props) {
  return (
     
    <div className="card">
      <div className="img-container">
        <img className="img" alt={props.name} src={props.image} onClick={props.handleIncrement}/>
      </div>
    </div>
    
   
  );
}

export default ImageCard;
