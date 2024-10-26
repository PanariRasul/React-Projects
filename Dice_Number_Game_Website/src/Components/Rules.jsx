import { styled } from "styled-components";

const Rules = () => {

    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <p>👉 Select any number</p>
            <p>👉 Click on dice image</p>
            <p>👉 After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>👉 If you get wrong guess then  2 point will be dedcuted </p>
        </RulesContainer>
    )
};

export default Rules;

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #FBF1F1;
    padding:20px;
    border-radius:10px;
    margin-bottom: 20px;

    h2{
        font-size: 24px;
        text-align: center;
    }

    p{
        font-size: 16px;
    }


`;