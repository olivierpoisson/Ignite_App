import axios from "axios";
import { popularGamesUrl } from "../api";

//! Action generator
export const loadGames = () => async (dispatch) => {
    //? Fetch with axios
    const popularData = await axios.get(popularGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
        },
    });
};
