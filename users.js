import { USERS, CURRENT_USER, ADMIN_ID, COMPLAINTS, FIRSTFORMDATA, CLEARFORMDATA } from '../constant';




const INITIAL_STATE = {
    adminUid: '',
    currentUser: '',
    allUsers: [{}],
    complaintsData: {}
}

export default (state = INITIAL_STATE, action) => {
    let list = null;
    switch (action.type) {
        case USERS:
            return ({
                ...state,
                allUsers: action.payload
            })
        case CURRENT_USER:
            return ({
                ...state,
                currentUser: action.payload
            })
        case ADMIN_ID:
            return ({
                ...state,
                adminUid: action.payload
            })
        // case COMPLAINTS:
        //     return ({
        //         ...state,
        //         complaintsData: action.payload
        //     })
        case FIRSTFORMDATA:
            // console.log(action.payload)
            return ({
                ...state,
                complaintsData: action.payload
            })
            console.log(action.payload)
        case CLEARFORMDATA:
            return ({
                ...state,
                complaintsData: {}
            })
        default:
            console.log(state)
            return state;
    }
}
console.log(INITIAL_STATE.complaintsData)