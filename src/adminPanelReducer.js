import {UPDATE_BOOK, EDIT_MODE_HANDLER} from './actions/actionsTypes';

const initialState = {
    book: {
        name: 'Book name from store',
        author: 'Author from store',
        description: '',
        availability: true,
        image: ''
    },
    editMode: false,
    titleOfBookForEdit: ''
};

const adminPanelReducer = (state = initialState, action) => {
    console.log("Action " + action.type);

    switch (action.type) {
        case UPDATE_BOOK:
            const book = action.payload;
            return {...state, book};
        case EDIT_MODE_HANDLER:
            const bookToEdit = action.payload;
            return {
                ...state,
                book: {...bookToEdit},
                bookToEdit,
                editMode: true,
                titleOfBookForEdit: bookToEdit.name
            };
        default:
            return state;
    }
};

export default adminPanelReducer;