const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=71ac2d5b05014dbc8b00af741b6199f3&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=71ac2d5b05014dbc8b00af741b6199f3&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=71ac2d5b05014dbc8b00af741b6199f3&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;
export const gameDetailsUrl = (gameId) =>
    `${base_url}games/${gameId}?key=71ac2d5b05014dbc8b00af741b6199f3`;
export const gameScreenshotsUrl = (gameId) =>
    `${base_url}games/${gameId}/screenshots?key=71ac2d5b05014dbc8b00af741b6199f3`;
