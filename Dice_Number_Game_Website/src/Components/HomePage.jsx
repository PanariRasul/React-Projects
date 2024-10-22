
const HomePage = ({ toggle }) => {
    return (
        <div className="home-section">
            <img src="/images/home-dices.png" alt="Dices" />
            <div className="homeText">
                <h1>DICE GAME</h1>
                <button onClick={toggle} >Play Now</button>
            </div>
        </div>
    );
};

export default HomePage;