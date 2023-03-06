import React from 'react';
import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import Header from '../Header';
import Background from '../../assets/bg.jpg';
import Palette from '../Palette';

const styles = {
    jumbotron: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "120vh",
        maxWidth: "100%",
        margin: "0"
  },
  h1: {
    color: `${Palette.dark.desertSand}`,
    fontSize: "5rem",
    textShadow: `0 0 10px ${Palette.light.cornsilk})`,
    fontWeight: "bolder"
  },
  p: {
    color: `${Palette.dark.peach}`,
    fontSize: "2rem",
    backgroundImage: `linear-gradient(to right, ${Palette.light.sunset2},1), ${Palette.light.sunset},0))`
  },
  navigation: {
    backgroundColor: `${Palette.light.peach}`
  }
};

function Home() {
    return (
            <>
                    <div className="container home">
                        <div className="jumbotron container-fluid rounded-0" style={styles.jumbotron}>
                           <div className = "welcome sticky-top">
                            <h1 className="m-5 p-0" style = {styles.h1}>Marta Perlinska</h1>
                            <div className="row m-0">
                            <p className="col-lg-6 col-md-8 display-4 p-2 ml-5 text-lg-left text-md-left text-sm-left rounded" style={styles.p}>Hi! Let's code something together</p>
                            </div>
                            </div>
                            <nav class="navbar navbar-expand mb-5 fixed-bottom" style={styles.navigation}>
                                <ul class="nav navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Nav 1 <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Nav 2</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
            </>
    )
};


export default Home;