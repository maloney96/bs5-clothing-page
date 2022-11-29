import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';


const ClothOptions = (props) => {
  const hatItem = props.hatItem
  const hatImage =  props.hatImage 

  const shirtItem = props.shirtItem
  const shirtImage =  props.shirtImage 

  const pantsItem = props.pantsItem
  const pantsImage =  props.pantsImage 

  const shoesItem = props.shoesItem
  const shoesImage =  props.shoesImage 

  const dropHandleOnChange = props.dropHandleOnChange

  return (
    <Container>
        <Row className = "px-2 my-3">
          <Col sm={7}>
            <Image
              src = {hatImage}
              fluid
              rounded
            />
          </Col>
          <Col sm={5}>
            <h2 className = 'mt-4'>Cap</h2>
            <select value={hatItem} onChange = {e => dropHandleOnChange(e,'hat')}>
                <option href="#/action-1" value='1' id = '1'>Gucci Hat</option>
                <option href="#/action-2" value='2' id ='2'>Carhartt Hat</option>
                <option href="#/action-3" value='3' id = '3'>Champion Hat</option>
            </select>
          </Col>
        </Row>
        <Row className = "px-2 my-3">
        <Col sm={7}>
            <Image
              src = {shirtImage}
              fluid
              rounded
            />
        </Col>
        <Col sm={5}>
          <h2 className = 'mt-4'>Shirt</h2>
            <select value={shirtItem} onChange = {e => dropHandleOnChange(e,'shirt')}>
                <option href="#/action-3" value='3' id = '3'>Patagonia T-Shirt</option>
                <option href="#/action-1" value='1' id = '1'>Banana Republic Shirt</option>
                <option href="#/action-2" value='2' id ='2'>Alphalete Hoodie</option>
            </select>
        </Col>
        </Row>
        <Row className = "px-2 my-3">
        <Col sm={7}>
            <Image
              src = {pantsImage}
              fluid
              rounded
            />
        </Col>
        <Col sm={5}>
        <h2 className = 'mt-4'>Pants</h2>
            <select value={pantsItem} onChange = {e => dropHandleOnChange(e,'pants')}>
                <option href="#/action-1" value='1' id = '1'>Lululemon Shorts</option>
                <option href="#/action-2" value='2' id ='2'>Alphalete Pants</option>
                <option href="#/action-3" value='3' id = '3'>Levi Jeans</option>
            </select>
        </Col>
        </Row>
        <Row className = "px-2 my-3">
        <Col sm={7}>
            <Image
              src = {shoesImage}
              fluid
              rounded
            />
        </Col>
        <Col sm={5}>
        <h2 className = 'mt-4'>Shoes</h2>
            <select value={shoesItem} onChange = {e => dropHandleOnChange(e,'shoes')}>
                <option href="#/action-3" value='3' id = '3'>Adidas Boost Slides</option>
                <option href="#/action-1" value='1' id = '1'>Cream Yeezys</option>
                <option href="#/action-2" value='2' id ='2'>Timberland Boots</option>
            </select>
        </Col>
        </Row>
      </Container>
  );
}

export default ClothOptions;