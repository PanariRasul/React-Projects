import { useState } from "react";
import { styled } from 'styled-components';

const RoleDice = () => {

    const showRules = () => {
        alert("Game Rules:\n1. Select a number from 1 to 6.\n2. Click on the dice to roll.\n3. If you roll your selected number, you gain that score.");
    };


    const [curentDice, setCurentDice] = useState(1);

    const generateRandomNumber = (min, max) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }

    const roleDice = () => {
        const randomNumber = generateRandomNumber(1, 6);
        setCurentDice(randomNumber);
    };

    return (
        <Main >
            <div className="roleDices" onClick={roleDice}>
                <img src={`/images/dice_${curentDice}.png`} alt="Dice" />
            </div>
            <p>Click on Dice to roll</p>
            <button className="prm-btn">Reset Score</button>
            <button className='scnd-btn' onClick={showRules} >Show Rules</button>
        </Main>
    );
};

export default RoleDice;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    height: 500px;
    align-items: center;
    justify-content: center;
    margin:0 auto;

    p {
            font-size: 24px;
            font-weight: 600;
            text-align: center;
        }

        .roleDices{
            width: 250px;
            height: 250px;
            padding: 10px;
            overflow: hidden;
            cursor: pointer;

            img{
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
        }

        .prm-btn {
            all: unset;
            width: 220px;
            height: 45px;
            background-color: transparent;
            color: black;
            align-items: center;
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 24px;
            border: 2px solid black;
            transition: 0.5s;
        }

        .prm-btn:hover {
            background-color: transparent;
            border: 2px solid transparent;
            color: black;
            box-shadow: 5px 5px 10px #bebebe,
                -5px -5px 10px #ffffff;
            transform: 0.5s;
        }

        .scnd-btn {
            all: unset;
            width: 220px;
            height: 45px;
            background-color: black;
            color: white;
            align-items: center;
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 24px;
            transition: 0.5s;
            border: 2px solid black;
        }

        .scnd-btn:hover {
            background-color: transparent;
            border: 2px solid black;
            color: black;
            box-shadow: 5px 5px 10px #bebebe,
                -5px -5px 10px #ffffff;
            transform: 0.5s;


        }

`;