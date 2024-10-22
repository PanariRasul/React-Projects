import { useState } from "react";
import styled from "styled-components"
const SecondPage = () => {

    const numberArray = [1, 2, 3, 4, 5, 6];

    const [selectNumber, setSelectNumber] = useState(null);

    console.log(selectNumber);

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
        <div className="second-page">
            <div className="topsection">
                <div className="topleft">
                    <h1 >0</h1>
                    <p>Total Score</p>
                </div>
                <div className="topright">
                    <div className="numbers">

                        {/* <h4>1</h4>
                    <h4>2</h4>
                    <h4>3</h4>
                    <h4>4</h4>
                    <h4>5</h4>
                    <h4>6</h4> */}

                        {
                            numberArray.map((value, i) => (
                                <Box
                                    isSelected={value === selectNumber}
                                    key={i}
                                    onClick={() => setSelectNumber(value)}
                                >
                                    {value}
                                </Box>
                            ))
                        }
                    </div>

                    <p>Select Number</p>

                </div>
            </div>
            <div className="bottomsection">
                <div className="roleDices" onClick={roleDice}>
                    <img src={`/images/dice_${curentDice}.png`} alt="Dice" />
                </div>
                <p>Click on Dice to roll</p>
                <button className="prm-btn">Reset Score</button>
                <button className='scnd-btn' onClick={showRules} >Show Rules</button>
            </div>
        </div>


    )
};

export default SecondPage;


const Box = styled.div`
        border: 1px solid black;
        height: 70px;
        width: 70px;
        display: flex;
        justify-content: center;
        font-size: 18px;
        font-weight: 700;
        align-items: center;
        cursor: pointer;
        transition: 0.7s;
        background-color: ${(props) => props.isSelected ? "black" : "white"};
        color: ${(props) => !props.isSelected ? "black" : "white"};

    &:hover{
        box-shadow:  4px 4px 7px #8f8f8f,
            -4px -4px 7px #ffffff;
        transform:0.7s;
        border: 1px solid transparent;
    };

`;
