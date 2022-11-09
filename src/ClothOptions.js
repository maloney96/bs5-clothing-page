import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import {hats_json, shirts_json, pants_json, shoes_json } from './ItemsCollection';
// import './App.css';

function ClothOptions() {
  return (
    <Container>
        <Row className = "px-2 my-3">
          <Col sm={7}>
            <Image
              src = {hats_json['Gucci Hat']}
              fluid
              rounded
            />
          </Col>
          <Col sm={5}>
            <h2 className = 'font-weight-light'>Cap</h2>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1" value = 'Gucci Hat'>Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
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
            <h2 className = 'font-weight-light'>Shoes</h2>
        </Col>
        </Row>
      </Container>
  );
}

export default ClothOptions;