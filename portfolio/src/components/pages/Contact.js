import React from 'react';
import BackgroundImg from '../../assets/bg.jpg';

function Contact() {
    return(
        <>
        <div className="parallax" style="
        div {
            height: 100%;
          }
          
          .parallax {
            /* The image used */
            background-image: url(${BackgroundImg});
          
            /* Full height */
            height: 100%; 
          
            /* Create the parallax scrolling effect */
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            "></div>

            <div style="height:1000px;background-color:red;font-size:36px">
            Scroll Up and Down this page to see the parallax scrolling effect.
            This div is just here to enable scrolling.
            Tip: Try to remove the background-attachment property to remove the scrolling effect.
            </div>

        <div className="parallax"></div>
        </>
    )
}

export default Contact;