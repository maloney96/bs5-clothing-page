import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hats_json, shirts_json, pants_json, shoes_json } from './ItemsCollection';
import pictureChange from './pictureChange';
import { useState } from 'react';
// import './App.css';

const ClothOptions = () => {
  const [clothItem, setclothItem] = useState('Gucci Hat');
  const [clothImage, setclothImage] = useState(hats_json['1']['img_url'])

  const dropHandleOnChange = (e) => {
    setclothItem(e.target.value);
    setclothImage(hats_json[e.target.value]['img_url']);
  };

  // const picHandleOnChange = (e) => {
  //   setclothImage(hats_json['cold']['img_url']);
  // };

  // https://codesandbox.io/s/jovial-https-x52ps?file=/src/App.js


  return (
    <Container>
        <Row className = "px-2 my-3">
          <Col sm={7}>
            <Image
              src = {clothImage}
              fluid
              rounded
              // onChange = {picHandleOnChange}
            />
          </Col>
          <Col sm={5}>
            <h2 className = 'mt-4'>Cap</h2>
            <select value={clothItem} onChange = {dropHandleOnChange}>
                <option href="#/action-1" value='1' id = '1'>Gucci Hat</option>
                <option href="#/action-2" value='2' id ='2'>Carhartt Hat</option>
                <option href="#/action-3" value='3' id = '3'>Champion Hat</option>
            </select>
          </Col>
        </Row>
        <Row className = "px-2 my-3">
        <Col sm={7}>
            <Image
              src = {shirts_json['moderate']['img_url']}
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
              src = {pants_json['moderate']['img_url']}
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
              src = {shoes_json['moderate']['img_url']}
              fluid
              rounded
            />
        </Col>
        <Col sm={5}>
            <h2 className = 'font-weight-light'>Shoes</h2>
        </Col>
        </Row>


        {/* UseEFFECT? */}
        {/* <script>
        function myFunction() {
        var x = document.getElementById("mySelect").value;
        document.getElementById("demo").innerHTML = "You selected: " + x;
        }
      </script> */}
      </Container>
  );
}

export default ClothOptions;