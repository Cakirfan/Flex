import { Container } from "react-bootstrap";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";


function App() {

  return (
    <Container className="App app-container rounded-2 py-3 mt-3">
      <Header/>
      <CardContainer/>
    </Container>
  );
}

export default App;
