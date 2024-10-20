import Logo from "../images/brand_logo.png";

const Navbar = () => {
    return (
        <nav className="container">
            <img src={Logo} alt="logo" />
            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <button>Login</button>
        </nav>
    );
};

export default Navbar;
