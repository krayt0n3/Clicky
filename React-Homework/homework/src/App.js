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

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let id = event.target.id;
    const count = event.target.count;

    console.log(id)
    console.log(count);
  };

  render() {  
    var shuffle = function (array) {

      var currentIndex = array.length;
      var temporaryValue, randomIndex;
    
      
      while (0 !== currentIndex) {
        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    
    };
  
    shuffle(images);

    
    
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
            onChange={this.handleInputChange}
            
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
