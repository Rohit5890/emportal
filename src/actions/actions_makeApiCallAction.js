
import UPDATE_API_DATA from '../actionCreators/actionCreators_update_api-actionCreator';

const makeApiCallAction = (_URL)=>{
    return (dispatch)=>{
        fetch(_URL)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch(UPDATE_API_DATA(data))
        })
        .catch(() => alert('something went wrong in api call'));
    }
}

export default makeApiCallAction;