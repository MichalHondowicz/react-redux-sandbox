

const initialState = {
    book: {
        name: 'Book name from store',
        author: 'Author from store',
    }
};

const adminPanelReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            console.log("Action not found");
            return state;
    }
};

export default adminPanelReducer;