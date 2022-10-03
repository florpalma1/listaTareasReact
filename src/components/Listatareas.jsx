import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTareas from './ItemTareas';

const Listatareas = ({arregloTareas, borrarTarea}) => {
    return (
        <ListGroup>
            {
                arregloTareas.map((tarea, posicion)=>  <ItemTareas key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTareas> )
            }
           
      </ListGroup>
    );
};

export default Listatareas;