const defaultStatus = [
    {
        user: 'admin',
        email: 'admin@gmail.com',
        image: 'admin.png',
        token: 'xxxxxxxxxxxx'
    },
];

function reducer(state = defaultStatus, { type, payload}){
    switch( type ){
        case 'login_in': {
            return {
                user: 'admin',
                email: 'admin@gmail.com',
                image: 'admin.png',
                token: 'xxxxxxxxxxxx'
            }
        }
        case 'login_up':{
            return {
                user: '',
                email: '',
                image: '',
                token: ''
            }
        }
        default:
            return state;
    }
}
export default reducer;