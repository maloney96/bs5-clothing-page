import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function ClothOptions() {
  return (
    <Container>
        <Row className = "px-2 my-3">
          <Col sm={7}>
            <Image
              src = 'https://dummyimage.com/300x200/b4b5ba/101dcf.png'
              fluid
              rounded
            />
          </Col>
          <Col sm={5}>
            <h2 className = 'font-weight-light'>Cap</h2>
          </Col>
        </Row>
        <Row className = "px-2 my-3">
        <Col sm={7}>
            <Image
              src = 'https://dummyimage.com/300x200/b4b5ba/101dcf.png'
              fluid
              rounded
            />
        </Col>
        <Col sm={5}>
            <h2 className = 'font-weight-light'>Shirt</h2>
        </Col>
        </Row>
        <Row className = "px-2 my-3">
        <Col sm={7}>
            <Image
              src = 'https://dummyimage.com/300x200/b4b5ba/101dcf.png'
              fluid
              rounded
            />
        </Col>
        <Col sm={5}>
            <h2 className = 'font-weight-light'>Pants</h2>
        </Col>
        </Row>
        <Row className = "px-2 my-3">
        <Col sm={7}>
            <Image
              src = 'https://dummyimage.com/300x200/b4b5ba/101dcf.png'
              fluid
              rounded
            />
        </Col>
        <Col sm={5}>
            <h2 classNameh = 'font-weight-light'>Shoes</h2>
        </Col>
        </Row>
      </Container>
  );
}

export default ClothOptions;