import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <h1>
            This is the home page which we have created<br></br>
            <Link to='/about'>About</Link><br></br>
            <Link to='/contact'>Contact</Link><br></br>
        </h1>
    )
}

export default Home;