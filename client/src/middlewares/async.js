export default ({dispatch}) => next => action =>{
    // check to see if action has a promise on its 'payload' property
    // if it does, wait for it to resolve, otherwise, pass the action to the next middleware
    if(!action.payload || !action.payload.then){
        return next(action);
    }
    action.payload.then((response)=>{
        const newAction = {...action, payload: response};
        dispatch(newAction);
    })
}   