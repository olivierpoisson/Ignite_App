import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const GameDetail = ({ pathId }) => {
    const { screenshots, game, isLoading } = useSelector(
        (state) => state.detail
    );
    const navigate = useNavigate();
    //! Exit details
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            navigate("/");
        }
    };

    const getPlatform = (platform) => {
        if (platform.includes("PlayStation")) {
            return playstation;
        } else if (platform.includes("Xbox")) {
            return xbox;
        } else if (platform === "PC") {
            return steam;
        } else if (platform === "Nintendo Switch") {
            return nintendo;
        } else if (platform.includes("OS")) {
            return apple;
        } else {
            return gamepad;
        }
    };

    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data) => (
                                        <img
                                            key={data.platform.id}
                                            src={getPlatform(
                                                data.platform.name
                                            )}></img>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img
                                src={smallImage(game.background_image, 640)}
                                alt="image"
                                layoutId={`image ${pathId}`}
                            />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screenshots.results.map((screenshot) => (
                                <img
                                    src={smallImage(screenshot.image, 640)}
                                    key={screenshot.id}
                                    alt="game image"
                                />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
    z-index: 100;

    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background-color: white;
    }
`;
const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background-color: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`;

const Description = styled(motion.div)`
    padding: 5rem 0rem;
`;

export default GameDetail;
