import React from 'react';
import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import Header from '../Header';
import Background from '../../assets/bg.jpg';
import Palette from '../Palette';
import NavTabs from '../NavTabs';
import '../MediaQueries.css';

const styles = {
    jumbotron: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "120vh",
        margin: "0"
  },
    h1: {
        color: `${Palette.dark.desertSand}`,
        fontSize: "4em",
        textShadow: `0 0 10px ${Palette.light.cornsilk})`,
        fontWeight: "bolder"
  },
    p: {
        color: `${Palette.dark.peach}`,
        fontSize: "2rem",
        backgroundImage: `linear-gradient(to right, ${Palette.light.sunset2},1), ${Palette.light.sunset},0))`
  }

};

function Home() {
    return (
            <>
                    <div className="container-fluid home">
                        <div className="jumbotron container-fluid rounded-0" style={styles.jumbotron}>
                           <div className = "welcome sticky-top">
                            <h1 className="m-5 p-lg-5 p-md-5 p-sm-0 m-sm-0" style = {styles.h1}>Marta Perlinska</h1>
                            <div className="row m-0">
                            <p className="col-lg-6 col-md-8 display-4 p-2 ml-5 rounded" style={styles.p}>Hi! Let's code something together</p>
                            </div>
                            </div>
                            <NavTabs />
                        </div>
                    </div>
            </>
    )
};


export default Home;