let initialState = {
    id: '',
    password: '',
    authenticate: false
}
function authenticateReducer(state=initialState, action) {
    let {type, payload} = action;
    console.log("authenticateReducer");
    switch(type) {
        case "LOGIN_SUCCESS":
            return {...state, id:payload.id, password:payload.password, authenticate: true}
        case "LOGOUT_SUCCESS":
            return {...state, id:payload.id, password:payload.password, authenticate: false}
        default: 
            return {...state}
    }
}

export default authenticateReducer