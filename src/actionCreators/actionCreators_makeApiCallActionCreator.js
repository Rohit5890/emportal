import makeApiCallAction from '../actions/actions_makeApiCallAction';

const makeApiCall_actionCreator = function(_URL){
    
    return makeApiCallAction(_URL)
    // return (dispatch) => {
        
    //     fetch(_URL)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             return response;
    //         })
    //         .then((response) => {
    //             return response.json()
    //         })
    //         .then((response)=>{
    //             console.log(response);
    //         })
    //         // .then((data) => {dispatch(UPDATE_API_DATA(data))})
    //         .catch(() => alert('something went wrong in api call'));
    // }
}

export default makeApiCall_actionCreator