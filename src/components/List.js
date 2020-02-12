import React from 'react'
import Card from './Card'

const List = ({ title, cards }) => {
    return(
        <div>
            <h4>{title}</h4>
            {cards.map(card => (
                <Card text={card.text} />

            )
            )}
        </div>
    )
}
export default List