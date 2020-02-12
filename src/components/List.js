import React from 'react'
import Taskcard from './Taskcard'
import { Col, Card } from 'react-bootstrap'

const List = ({ title, cards }) => {
    return(
        <Col sm={3}>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>   
                        {cards.map(card => (
                            <Taskcard text={card.text} />

                        )
                        )}
                </Card.Body>
            </Card>
        </Col>
    )
}
export default List