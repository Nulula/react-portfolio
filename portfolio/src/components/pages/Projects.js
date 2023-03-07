import React from 'react';
import Background from '../../assets/bg.jpg';
import Palette from '../Palette';
import Header from '../Header';
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
        backgroundColor: `${Palette.light.sunset2},0.8)`,
        whiteSpace: "pre-wrap"
  },
  imageContainer: {
    backgroundImage: `linear-gradient(${Palette.dark.desertSand},1),${Palette.light.sunset},1),${Palette.light.cornsilk},1))`, 
    backgroundSize: "cover",
    position: "relative", /* Needed to position the cutout text in the middle of the image */
    height: "300px" /* Some height */
  },
  
  text: {
    backgroundColor: `${Palette.light.cornsilk},1)`,
    color: "black",
    fontSize: "8vw", /* Responsive font size */
    fontWeight: "bold",
    margin: "0 auto", /* Center the text container */
    padding: "10px",
    width: "100%",
    textAlign: "center", /* Center text */
    position: "absolute", /* Position text */
    top: "50%", /* Position text in the middle */
    left: "50%", /* Position text in the middle */
    transform: "translate(-50%, -50%)", /* Position text in the middle */
    mixBlendMode: "screen" /* This makes the cutout text possible */
  }

};

function Projects() {
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
                            " style = {styles.h1}>Projects</h1>
                            <div className="row">
                                <div className="
                                col-lg-3 
                                col-md-2
                                col-sm-1
                                col-xs-1">
                                </div>
                                <div className="
                                col-lg-6
                                col-md-8
                                col-sm-10
                                col-xs-10">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="imageContainer" style={styles.imageContainer}>
            <div className="text" style={styles.text}>STARLIGHT</div>
        </div>
    </div>
    <div className="carousel-item">
    <div className="imageContainer" style={styles.imageContainer}>
            <div className="text" style={styles.text}>PLANNER</div>
        </div>
    </div>
    <div className="carousel-item">
    <div className="imageContainer" style={styles.imageContainer}>
            <div className="text" style={styles.text}>REACT</div>
        </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
                                </div>
                            </div>

                            </div>
                        <Header />
                    </div>
                </div>
            </>
    )
};



export default Projects;