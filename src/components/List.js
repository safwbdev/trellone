import React from 'react'
import Taskcard from './Taskcard'
import { Col, Card } from 'react-bootstrap'
import ActionButton from './ActionButton'
import { Droppable } from 'react-beautiful-dnd'

const List = ({ title, cards, listID }) => {
    return(
        <Droppable droppableId={String(listID)}>
            {provided => (
            <Col {...provided.droppableProps} ref={provided.innerRef} sm={3}>
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
            </Col>
            )}
        </Droppable>
    )
}
export default List