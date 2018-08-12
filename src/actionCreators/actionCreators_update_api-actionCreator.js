import updateApiDataAction from '../actions/actions_updateApiDataAction';

const UPDATE_API_DATA =  function(data){
    Object.assign(updateApiDataAction, data)
    return updateApiDataAction ;
}
export default UPDATE_API_DATA;