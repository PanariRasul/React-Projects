
import { styled } from "styled-components";

const Button = ({ name }) => {
    return (
        <ButtonContainer>
            <button >{name}</button>
        </ButtonContainer>
    );
};

export default Button;

const ButtonContainer = styled.div`
    margin: auto;
    

    button{
        color: white;
        background-color: #FF4343;
        padding: 10px;
        outline: none;
        width: 100px;
        border: none;
        border-radius: 3px;
        font-weight: 700;
        cursor: pointer;
    }

`;