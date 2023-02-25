import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      </main>
    </div>
  );
}

export default App;
