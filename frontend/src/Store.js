import { createStore } from 'redux';

const initState = {
    isLoggedIn: ''
}

const Store = (state = initState, action) => {
    if (action.type === 'LOGGIN') {
        return {
            ...state,
            // Login c'est le payload.
            isLoggedIn: action.login
        };
    }
    if (action.type === 'LOGOUT') {
        return {
            ...state,
            // Login c'est le payload.
            isLoggedIn: action.logout
        };
    }
    return state
};



const store = createStore(Store);

// Pour voir chaque changement de state dans le store
store.subscribe(() => {
    console.log("state updated", store.getState());
});

export default store;