import axios from "axios";
import { gameDetailsUrl, gameScreenshotsUrl } from "../api";

const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsUrl(id));
    const screenshotsData = await axios.get(gameScreenshotsUrl(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screenshots: screenshotsData.data,
        },
    });
};

export default loadDetail;
