import Card from "react-bootstrap/Card";

const CardPhotographer = ({ photographer, src}) => {
  return (
    <Card className="rounded-2 m-auto photographer-card">
      <Card.Img variant="top" src={src.large} className="photographer-logo" />
      <Card.Body className="bg-warning c-body">
        <Card.Title className="card-title">{photographer}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardPhotographer;
