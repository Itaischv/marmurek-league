import { useEffect, useState } from 'react';
import axios from "axios";

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(  () => {
        async function getTeams() {
            console.log("before request")

            const data = await axios.get('http://localhost:3000/teams');
            console.log("teams:", data.data.teams)
            setTeams(data.data.teams);
        };
        getTeams();
    }, []);
    return (
        <>
            {teams.map( x => (<p key={x.id}>{x.name}</p>))}
        </>
    )
};

export default Teams;

