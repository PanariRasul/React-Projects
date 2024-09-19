import React from "react";
import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";
import notes from "../notes"



function App(props) {
    return (
        <div>
            <Header />
            <Contents />
            <Footer />
        </div>);
};

export default App;