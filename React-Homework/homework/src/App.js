import React  from "react";

import Footer from "./components/Footer"
import ImageCard from "./components/MainContent"
import images from "../src/images.json"
import {Container, Row} from "react-bootstrap"
import Spacer from "./components/Spacer"


class App extends React.Component {
  state = {
    images,
    count : 0
  };
 
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  render() {

  
    return (
      <div>
        
        
        <ul className="navbar">
     <li> <a href="/">Clickster</a></li>
     <li>Click the image to begin!</li>
     <li>Score: {this.state.count} | Top Score: 0</li>
     </ul> 
    
        <Spacer />
        <Container>
          <Row>
            
        {this.state.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
            handleIncrement={this.handleIncrement}
            
          />
        ))}
        
        </Row>
        </Container>
        <Footer />
      </div>
      
    )
  }
}

export default App;
