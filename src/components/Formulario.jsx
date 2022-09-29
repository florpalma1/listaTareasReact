import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Listatareas from './Listatareas';

const Formulario = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Ingrese una tarea" />
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