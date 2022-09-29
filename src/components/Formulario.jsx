import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Listatareas from './Listatareas';

const Formulario = () => {
    // aqui va la logica
    const [tarea, setTarea] = useState("");
    const [arregloTareas, setarregloTareas] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("desde handleSubmit");
        setarregloTareas([...arregloTareas, tarea]);
        setTarea("");
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una tarea"
                        onChange={(e) => setTarea(e.target.value)}
                        value={tarea} />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
            <Listatareas></Listatareas>
        </div>
    );
};

export default Formulario;