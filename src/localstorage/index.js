export const obtenerStateStorage = () => {
    const userStorage = localStorage.getItem('user');
    if(userStorage === null) {
        return undefined
    }
    return JSON.parse(userStorage);
}

export const guardarStateStorage = state => {
    const userState = JSON.stringify(state);
    localStorage.setItem('user', userState);
}