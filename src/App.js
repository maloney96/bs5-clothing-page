import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import RecoFooter from './Recommend';
// import ClothOptions from './ClothOptions';
import WeatherForm from './Weather';
// import Header from './Header';
// import Reccomend from './Recommend';

// const weather = handle_weather.weather
// const handleSubmit = handle_weather.handleSubmit

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Clothing Recommender
      </p>
      </header>
      {/* <Header weather = {weather} handleSubmit = {handleSubmit}></Header> */}
      <WeatherForm></WeatherForm>
      <main>
      {/* <ClothOptions></ClothOptions> */}
      {/* <Reccomend></Reccomend> */}
      </main>
    </div>
  );
}

export default App;
