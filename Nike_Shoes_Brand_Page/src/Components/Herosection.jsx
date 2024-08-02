import "../App.css";
const Herosection = () => {
    return (
        <div className="hero-section">
            <div className="herotext">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className="hero-desc">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <button className="btn1">Shop Now</button>
                <button className="btn2">Catgorey</button>
                <p className="available">Also Available On</p>
                <img src="/images/flipkart.png" alt="Flipkart logo" />
                <img src="/images/amazon.png" alt="Amazon logo" />
            </div>
            <div className="heroimage"><img src="/images/shoe_image.png" alt="Shoe image" /></div>
        </div>
    )
}

export default Herosection;