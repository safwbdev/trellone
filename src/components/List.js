import React from 'react'
import Taskcard from './Taskcard'
import ActionButton from './ActionButton'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin: 0 8px 0 0;
`;

const List = ({ title, cards, listID, index }) => {
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer 
                    {...provided.draggableProps} 
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps}  >
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <h4>{title}</h4>   
                                {cards.map((card, index) => (
                                    <Taskcard 
                                    key={card.id} 
                                    id={card.id}
                                    index={index}
                                    text={card.text} />
                                ))}
                                <ActionButton listID={listID} />
                                {provided.placeholder}
                        </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    )
}

const styles ={
    container: {
        backgroundColour:"#dfe3e6",
        borderRadius:3,
        width:300,
        padding:8,
        height:"100%",
        marginRight:8
    }
}
export default List