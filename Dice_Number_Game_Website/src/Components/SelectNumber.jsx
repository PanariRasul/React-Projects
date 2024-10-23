
import { useState } from "react";
import { styled } from 'styled-components';
const SelectNumber = () => {


    const numberArray = [1, 2, 3, 4, 5, 6];

    const [selectNumber, setSelectNumber] = useState(null);

    console.log(selectNumber);

    return <MainContainer >

        <div className="flex">

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

    </MainContainer>
};

export default SelectNumber;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    .flex {
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 600;
        float: right;
        text-align: end;
        margin-left: auto;
        margin-right: 0;
    }

`;

const Box = styled.div`
        border: 1px solid black;
        height: 70px;
        width: 70px;
        display:flex;
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

