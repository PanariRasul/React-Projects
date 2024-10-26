import styled from "styled-components";


const TotalScore = ({ score, setScore }) => {

    return (
        <Main>
            <h1 >{score}</h1>
            <p>Total Score</p>
        </Main>
    );
};


export default TotalScore;

const Main = styled.div`

    align-items: center;

    h1 {
        font-size: 100px;
        font-weight: 600;
        line-height: 80px;
        text-align: center;
        cursor: not-allowed;
    }

    p {
        font-size: 24px;
        font-weight: 600;
    }
`;