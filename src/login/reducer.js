import { CHECK_LOGIN, LOGIN_SUCCESS, LOGOUT_USER, API_ERROR } from './actionType';
const initialState = {
    user: []
}
export const login = (state = initialState, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state
            }
            break;

        default:
            break;
    }
}