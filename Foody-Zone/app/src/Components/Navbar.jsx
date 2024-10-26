import { styled } from 'styled-components';
import Button from './Button';


const Navbar = () => {
    return (
        <NavbarContainer>
            <div className="navtop">
                <img src="/images/FoodyZone.png" alt="Foody Zone Logo" />
                <input type="search" placeholder='Search Food....' />
            </div>
            <div className="btns">
                <Button name="All" />
                <Button name="Breakfast" />
                <Button name="Lunch" />
                <Button name="Dinner" />
            </div>
        </NavbarContainer>
    );
};

export default Navbar;

const NavbarContainer = styled.div`

    background-color: #31363F;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .navtop{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;


        img{
            height: 40px;
            width:200px;
        }

        input{
            width: 285px;
            height: 40px;
            border: 1px solid #FF0909;
            border-radius: 5px;
            padding: 2px 10px;
            color: white;
            background-color:transparent;
            font-size: 16px;
            outline:#FF0909 ;
        }
    }

    .btns{
        display: flex;
        justify-content: center;
        gap: 15px;
        height: 50px;
    }
`;