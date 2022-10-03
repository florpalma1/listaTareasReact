import React from 'react';
import { Button, ListGroup} from 'react-bootstrap';

const ItemTareas = ({nombreTarea, borrarTarea}) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between' >
            {nombreTarea}
            <Button variant='danger' onClick={()=>{borrarTarea(nombreTarea)}}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTareas;