import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateNote from "./Components/CreateNote";
import AddNewNote from "./Components/AddNewNote"

const App = () => {
  return <div className="">
    < Header />
    <CreateNote />
    <AddNewNote />
    <Footer />
  </div>
};

export default App;