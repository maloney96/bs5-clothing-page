import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Recomend = (props) => {
  const weather = props.weather
  const weathButtonHandleOnChange = props.weathButtonHandleOnChange
  return (
    <Card className="text-center">
      <Card.Header>Weather Summary: {weather} (°F)</Card.Header>
      <Card.Body>
        <Card.Title>Recommend</Card.Title>
        <Card.Text>
          Hit the button to receive a recommendation on what to wear, based on your location's weather!
        </Card.Text>
        <Button onClick={weathButtonHandleOnChange} variant="primary">Generate Reccomendation</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Author: Liam Maloney 2022</Card.Footer>
    </Card>
  );
}

export default Recomend;