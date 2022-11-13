import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecoFooter from './Recommend';
import ClothOptions from './ClothOptions';
import WeatherForm from './Weather';
import Header from './Header';
import Reccomend from './Recommend';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Clothing Recommender
      </p>
      </header>
      {/* <Header></Header> */}
      <WeatherForm></WeatherForm>
      <main>
      <ClothOptions></ClothOptions>
      <Reccomend></Reccomend>
      </main>
    </div>
  );
}

export default App;
