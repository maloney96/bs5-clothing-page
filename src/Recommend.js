import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RecoFooter() {
  return (
    <Card className="text-center">
      <Card.Header>Weather Summary Here?</Card.Header>
      <Card.Body>
        <Card.Title>Recommend</Card.Title>
        <Card.Text>
          Hit the button to receive a recommendation on what to wear, based on your location's weather!
        </Card.Text>
        <Button variant="primary">Generate Reccomendation</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Author: Liam Maloney 2022</Card.Footer>
    </Card>
  );
}

export default RecoFooter;