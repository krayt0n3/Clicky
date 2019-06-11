import React  from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import ImageCard from "./components/MainContent"
import images from "../src/images.json"
import {Container, Row, Col} from "react-bootstrap"

class App extends React.Component {
  state = {
    images
  };
 
  render() {

  
    return (
      <div>
        
        <Header />
        <Container>
          <Row>
            <Col>
        {this.state.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
            
          />
        ))}
        </Col>
        </Row>
        </Container>
        <Footer />
      </div>
      
    )
  }
}

export default App;
