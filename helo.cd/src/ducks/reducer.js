const initialState = {
    username: null,
    id: 0,
    profile_pic: null, 
};

const USER_LOGIN = 'USER_LOGIN';
const USER_REGISTER = 'USER_REGISTER';

export default function reducer(state = initialState, action){
    switch(action.type) {
        default:
          return state
    }
}

export function login(user){
    return{
        type: USER_LOGIN,
        payload: user
    };
}


export function register(user){
    return{
        type: USER_REGISTER,
        payload: user
    };
}

