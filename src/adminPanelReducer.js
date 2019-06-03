const initialState = {
    book: {
        name: 'Book name from store',
        author: 'Author from store',
        description: '',
        availability: true,
        image: ''
    }
};

const adminPanelReducer = (state = initialState, action) => {
    console.log("Action " + action.type);

    switch (action.type) {
        case 'UPDATE_BOOK':
            const book = action.payload;
            return {...state, book};
        default:
            return state;
    }
};

export default adminPanelReducer;