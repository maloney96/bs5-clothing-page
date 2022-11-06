// import logo from './logo.svg';
// import Image from 'react-bootstrap/Image';
import './App.css';
// import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecoFooter from './Recommend';
import ClothOptions from './ClothOptions';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Clothing Recommender
      </p>
      </header>
      <main>
      <ClothOptions></ClothOptions>
      <RecoFooter></RecoFooter>
      </main>
    </div>
  );
}

export default App;
