import React  from "react";

import Footer from "./components/Footer"
import ImageCard from "./components/MainContent"
import images from "../src/images.json"
import {Container, Row} from "react-bootstrap"
import Spacer from "./components/Spacer"


class App extends React.Component {
  state = {
    images,
    count : 1,
    score: [0]
  };
 
  handleIncrement = () => {
    
    
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.state.score.push(this.state.count);
    console.log(this.state.score);
    
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
     <li>Score: {this.state.count - 1} | Top Score: {Math.max.apply(null, this.state.score)}</li>
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
