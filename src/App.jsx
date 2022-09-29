import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container";
import Formulario from "./components/Formulario";


function App() {
  return (
    <Container className="my-5">
        <h1 className="display-2 text-center">Lista de Tareas</h1>
        <hr />
        <Formulario></Formulario>
  
    </Container>
  );
}

export default App;
