import ActionTypes from '../Action/actiontypes'

export const menuReducer = (state = true,action) => {

    switch(action.type){
        case ActionTypes.MESSAGE_BOX_MENU:
            state = !state;
            return state;

        default:
            return state;
    }

}