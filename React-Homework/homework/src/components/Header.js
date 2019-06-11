import React from "react";
import "../styles/Global.css";
import {Navbar} from "react-bootstrap"



function Nav (props) {
 
    return (
      <div>
      <Navbar>
        <ul>
     <li> <a href="/">Clickster</a></li>
     <li>Click the image to begin!</li>
     <li>Score: {props.count} | Top Score: 0</li>
     </ul> 
    </Navbar>
    
    </div>
    );
  
}

export default Nav;