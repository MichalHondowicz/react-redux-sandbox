import {UPDATE_BOOK, EDIT_MODE_HANDLER} from './actionsTypes';

export const updateBookAction = (book) => {
    return {type: UPDATE_BOOK, payload: book}
};

export const sendBookToEdit = (book) => {
    return {type: EDIT_MODE_HANDLER, payload: book}
};