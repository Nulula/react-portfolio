import React from 'react';
import Background from '../../assets/bg.jpg';
import Palette from '../Palette';
import NavTabs from '../NavTabs';
import '../MediaQueries.css';
import Contact from './Contact';

const styles = {
    jumbotron: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "120vh",
        marginTop: "0"
  },
    h1: {
        color: `${Palette.dark.desertSand}`,
        fontSize: "4em",
        textShadow: `0 0 10px ${Palette.light.cornsilk})`,
        fontWeight: "bolder"
  },
    p: {
        color: `${Palette.dark.peach}`,
        backgroundColor: `${Palette.light.sunset2},0.8`,
        whiteSpace: "pre-wrap"
  }

};

const aboutText = 
"I am Marta. I currently work as a Principal Geomatics Assistant, with experience managing large scale spatial datasets. I love to learn new things, and front-end development seems like a perfect extension to my knowledge.\n \nI believe that people should not be merited by what they have on paper, but by their skills. \n \nIf you are interested to work with me, please go to Contact page now!"

function About() {
    return (
            <>
                <div className="container-fluid home">
                    <div className="jumbotron container-fluid rounded-0" style={styles.jumbotron}>
                            <div className = "welcome sticky-top">
                            <h1 className="
                            p-lg-5 
                            p-md-5 
                            p-sm-0
                            p-xs-0
                            " style = {styles.h1}>About</h1>
                                <div className="row m-0">
                                <div className="col-lg-3"></div>
                                    <div className="col-lg-6">
                                    <p className=" p-2 lead text-justify" style={styles.p}>{aboutText}</p>
                                    </div>
                                    <div className="col-lg-3"></div>
                                </div>
                            </div>
                        <NavTabs />
                    </div>
                </div>
            </>
    )
};

export default About;