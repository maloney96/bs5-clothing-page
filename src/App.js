import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecoFooter from './Recommend';
import ClothOptions from './ClothOptions';
import WeatherForm from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Clothing Recommender
      </p>
      </header>
      <WeatherForm></WeatherForm>
      <main>
      <ClothOptions></ClothOptions>
      <RecoFooter></RecoFooter>
      </main>
    </div>
  );
}

export default App;
