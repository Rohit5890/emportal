const apiDataReducer = function(state={}, action={}){
    
    switch(action.type){
        case 'UPDATE_API_DATA':
        return Object.assign({},state, action.data);
        default:
        return state;
    }
}

export default apiDataReducer;