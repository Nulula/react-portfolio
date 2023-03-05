import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../Header';
import Background from '../../assets/bg.jpg';

const styles = {
    jumbotron: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "120vh",
        maxWidth: "100%",
        margin: "0",
  }
};

function Home() {
    return (
            <>
                    <div className="container home">
                    <div className="jumbotron container-fluid rounded-0" style={styles.jumbotron}>
                      <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                      <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                      <button className="btn btn-primary btn-lg" type="button">Example button</button>
                    </div>
                    </div>
            </>
    )
};


export default Home;