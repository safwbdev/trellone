import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;


const Taskcard = ({text, id, index }) => {
    return(
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <CardContainer 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}>
                    <Card>
                      <CardContent>
                        <Typography gutterBottom>{text}</Typography>
                      </CardContent>
                    </Card>
                </CardContainer>)}
        </Draggable>
    )
}
export default Taskcard