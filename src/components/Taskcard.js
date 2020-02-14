import React from 'react'
import { Card } from 'react-bootstrap'
import { Draggable } from 'react-beautiful-dnd'

const Taskcard = ({text, id, index }) => {
    return(
        <Draggable 
            draggableId={String(id)} 
            index={index}>
            {provided => (
                <div 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}>
                    <Card>
                        <p>{text}</p>
                        <p>{id}</p>
                    </Card>
                </div>)}
        </Draggable>
    )
}
export default Taskcard