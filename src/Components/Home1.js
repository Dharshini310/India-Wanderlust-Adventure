import React from "react";
import './Home.css';
import AnimatedVideo from "./Animatedvideo";
import Scrollingcomp from "./Scrollingcomp";
function Home1(){
    return(
        <div className="di">
            <div>
                <p id="u">welcome to india</p>
                <AnimatedVideo/>
                <Scrollingcomp/>
                <footer>
                    <p className="ul">"Explore, Dream, Discover: Your Ultimate Getaway Awaits!"</p>
                </footer>
            </div>
        </div>
    )
}

export default Home1;
