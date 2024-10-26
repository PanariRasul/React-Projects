
import { useState } from "react";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber"
import styled from "styled-components";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
const GamePlay = () => {

    const [selectNumber, setSelectNumber] = useState(null);

    const [score, setScore] = useState(0)

    const [curentDice, setCurentDice] = useState(1);

    const [error, setError] = useState("");

    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }


    const roleDice = () => {

        if (!selectNumber) {
            setError("You Have Not Selected Any Number!")
            return;
        };
        setError("");

        const randomNumber = generateRandomNumber(1, 6);
        setCurentDice(randomNumber);

        if (selectNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)

        }

        setSelectNumber(undefined)

    };


    return (
        <div className="second-page">
            <Top >
                <TotalScore score={score} />
                <SelectNumber error={error} setError={setError} selectNumber={selectNumber} setSelectNumber={setSelectNumber} />
            </Top>
            <div>
                <RoleDice curentDice={curentDice} roleDice={roleDice} setScore={setScore} showRules={showRules} setShowRules={setShowRules} />
            </div>

            {showRules && <Rules />}
        </div>


    )
};

export default GamePlay;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    margin: 30px 80px ;
`;
