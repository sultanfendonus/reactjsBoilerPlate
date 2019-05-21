import createStreamApi from '../api/createStream'
import history from '../history'

export const signIn = (userId)=>{
    return{
        type : 'SIGN_IN',
        payload : userId
    }
}


export const signOut = ()=>{
    return{
        type : 'SIGN_OUT'
    }
    
}

export const createNewStream = (formValue) =>async (dispatch , getState) =>{
    const {userId} = getState().authStatus;
   const response = await createStreamApi.post('/streams',{...formValue, userId});
   dispatch({type : "CREATE_STREAM",payload: response.data});
    history.push('/');
}

export const fetchStreams = () => async dispatch =>{
    const response = await createStreamApi.get('/streams');
    dispatch({type : "FETECH_STREAMS",payload : response.data});
}

export const fetchStream = (id) => async dispatch =>{
    const response = await createStreamApi.get('/streams/'+id);
    dispatch({type : "FETECH_STREAM",payload : response.data});
}

export const editStream = (id,formValue) => async dispatch =>{
    const response = await createStreamApi.patch('/streams/'+id,formValue);
    dispatch({type : "EDIT_STREAM",payload : response.data});
    history.push('/');
}

export const deleteStream = (id) => async dispatch =>{
    await createStreamApi.delete('/streams/'+id);
    dispatch({type : "DELETE_STREAM",payload : id});
    history.push('/');
}

