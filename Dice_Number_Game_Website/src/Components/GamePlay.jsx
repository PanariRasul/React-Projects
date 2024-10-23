
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber"
import styled from "styled-components";
import RoleDice from "./RoleDice";
const GamePlay = () => {


    return (
        <div className="second-page">
            <Top >
                <TotalScore />
                <SelectNumber />
            </Top>
            <div>
                <RoleDice />
            </div>

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
