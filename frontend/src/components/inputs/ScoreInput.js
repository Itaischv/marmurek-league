import {useState} from "react";
import './style.css';

const ScoreInput = () => {
    const [score, setScore] = useState(0);
    function validateOnlyNumber(e) {
        console.log("validateOnlyNumber")
        const re = /^[0-9\b]+$/;

        if (e.target.value === '' || re.test(e.target.value)) {
            setScore(e.target.value);
        }
    }
    return (
        <input class="score-box" type="number" onChange={(e) => validateOnlyNumber(e)}/>
    )
}

export default ScoreInput;