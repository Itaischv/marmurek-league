import { useEffect, useState } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import ScoreInput from "../inputs/ScoreInput";
import "./style.css";
const Fixture = () => {
    const [round, setRound] = useState([]);
    const { id } = useParams();

    useEffect(  () => {
        async function getFixtures() {
            const data = await axios.get("http://localhost:3000/fixtures/" + id);
            console.log("Data: ", data)
            setRound(data.data.fixtures);
        };
        getFixtures().then(console.log("fixture", round));
    }, []);
    return (
        <>
            <div>
                <h3>Round {id}</h3>
                <form action="POST" >
                    {round.map((match) => (
                        <div>
                            <span className={`team`}>{match.teams.home.name}</span>
                                <ScoreInput/> - <ScoreInput/>
                            <span className={`team`}>{match.teams.away.name}</span>
                        </div>
                    ))}
                </form>
            </div>
        </>
    )
};

export default Fixture;

