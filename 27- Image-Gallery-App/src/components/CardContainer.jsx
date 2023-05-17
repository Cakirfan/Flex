import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import CardPhotographer from "./CardPhotographer";

const CardContainer = () => {
  //   console.log(data);
  return (
    <Container className="text-center mt-4 card-container">
      <Row className="g-3 justify-content-center">
        {data.map((photographer, i) => {
          return (
            <Col key={i} md={6} lg={4} xl={3} className="card-hidden">
              <CardPhotographer {...photographer} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardContainer;
