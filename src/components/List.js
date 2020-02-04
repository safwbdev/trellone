import React from 'react'
import Card from './Card'
const List = ({title}) => {
    return(
        <div>
            <h4>{title}</h4>
            <Card />
        </div>
    )
}
export default List