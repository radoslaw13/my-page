import { CHANGE_LANG } from './actions';
import api from '../api';

const initialState = {
    content: api.getContent()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANG: 
            return { content: api.getContent(action.language)}
        default:
            return state
    }
}