import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useEffect } from "react";
import Game from "../components/game";
import GameDetail from "../components/gameDetail";

import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Home = () => {
    //? Get the current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    //? Extract the data from the state (store)
    const { popular, newGames, upcoming } = useSelector((state) => state.games);
    return (
        <GameList>
            <LayoutGroup>
                <AnimatePresence>
                    {pathId && <GameDetail pathId={pathId} />}
                </AnimatePresence>
            </LayoutGroup>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;
