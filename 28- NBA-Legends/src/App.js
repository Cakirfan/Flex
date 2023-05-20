import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css"
import Header from './components/Header';
import CardContent from './components/CardContainer';




function App() {
  return (
    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
      <Header/>
      <CardContent/>
    </div>
  );
}

export default App;
