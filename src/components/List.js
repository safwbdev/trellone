import React from 'react'
import Taskcard from './Taskcard'
import { Col, Card } from 'react-bootstrap'
import ActionButton from './ActionButton'

const List = ({ title, cards, listID }) => {
    return(
        <Col sm={3}>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>   
                        {cards.map(card => (
                            <Taskcard 
                                key={card.id} 
                                text={card.text} />

                        )
                        )}
                        <ActionButton listID={listID} />
                </Card.Body>
            </Card>
        </Col>
    )
}
export default List