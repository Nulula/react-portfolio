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

function Contact() {
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
                        " style = {styles.h1}>Contact</h1>
<form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
                        </div>
                    <Header />
                </div>
            </div>
        </>
    )
};

export default Contact;