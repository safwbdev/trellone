import React from 'react'
import Taskcard from './Taskcard'
import { Col, Card } from 'react-bootstrap'
import ActionButton from './ActionButton'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const List = ({ title, cards, listID, index }) => {
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <Col 
                    {...provided.draggableProps} 
                    ref={provided.innerRef} 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    sm={2}>
            <Droppable droppableId={String(listID)}>
                {provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>   
                                {cards.map((card, index) => (
                                    <Taskcard 
                                    key={card.id} 
                                    id={card.id}
                                    index={index}
                                    text={card.text} />
                                    
                                    )
                                    )}
                                <ActionButton listID={listID} />
                                {provided.placeholder}
                        </Card.Body>
                    </Card>
                </div>
                )}
            </Droppable>
            </Col>

            )}
        </Draggable>
    )
}
export default List