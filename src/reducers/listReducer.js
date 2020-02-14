import { CONSTANTS } from '../actions'

let listID = 2;
let cardID = 2;

const initialState = [
    {
        title: "new title",
        id: 0,
        cards: [
            {
                id:0,
                text: "card 1 ipdum"
            },
            {
                id:1,
                text: "second card"
            }
        ]
    },
    {
        title: "a second list ",
        id: 1,
        cards: [
            {
                id:0,
                text: "card 1 ipdum"
            },
            {
                id:1,
                text: "second card"
            }
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type){

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            };
            listID+= 1;
            
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            };
            cardID += 1

            console.log("action recieved", action);

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;

                }
            });

            return newState;
            
        default:
            return state;
    }
}

export default listReducer;