const initState = {
    popular: [],
    newGames: [],
    upcomingGames: [],
    searched: [],
};

const gamesReducer = (state = initState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state, popular: action.payload.popular };
        default:
            return { ...state };
    }
};

export default gamesReducer;
