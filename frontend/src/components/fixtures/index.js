import { useEffect, useState } from 'react';
import axios from "axios";
import ScoreInput from "../inputs/ScoreInput";
import Fixture from "./Fixture";
const Fixtures = () => {
    const [fixtures, setFixtures] = useState([]);
    console.log(req.params)
    useEffect(  () => {
        async function getFixtures() {
            const data = await axios.get('http://localhost:3000/fixtures');
            setFixtures(data.data.fixtures);
        };
        getFixtures();
    }, []);
    return (
        <>
            <Fixture id={3}/>
            <h2>Fixtures</h2>
            {fixtures.map(f => {
                const homeTeam = f.teams["home"]["name"];
                const awayTeam = f.teams["away"]["name"];
                const round = f.league["round"];
                const matchTime = new Date(f.fixture.date).toString();
                return(
                    <div>
                        <p>{homeTeam} <ScoreInput type="text"/> - <ScoreInput type="text"/>  {awayTeam}</p>
                        <p>{matchTime}</p>
                    </div>
                    )

            })}
        </>
    )
};

export default Fixtures;

