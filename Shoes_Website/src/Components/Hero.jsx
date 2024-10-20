import shoe_image from "../images/shoe_image.png";
import flipkart_image from "../images/flipkart.png";
import amzon_image from "../images/amazon.png";

const Hero = () => {
    return (
        <main className="container">
            <div className="hero-text">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn">
                    <button className="primary-btn">Shop Now</button>
                    <button className="secondery-btn">Category</button>
                </div>

                <div className="brand-logo">
                    <p>Also Available On</p>
                    <img src={flipkart_image} alt="Flipkart Logo" />
                    <img src={amzon_image} alt="Amzon Logo" />
                </div>
            </div>
            <div className="hero-image">
                <img src={shoe_image} alt="shoe image" />
            </div>
        </main>
    );
};

export default Hero;
