import "../App.css";
const Navbar = () => {

    return (
        <nav>
            <div className="logo"><img src="/images/nikePNG.png" alt="Logo" /></div>
            <ul className="navitems">
                <li href="#">Home</li>
                <li href="#">Location</li>
                <li href="#">Contact Us</li>
                <li href="#">About Us</li>
            </ul>
            <button>Log In</button>
        </nav>
    );
}

export default Navbar;