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
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default listReducer;