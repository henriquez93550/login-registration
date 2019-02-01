import React, { Component } from 'react';
import coding from '../images/coding.mp4';

class Homeheader extends Component {
    render() {
        return (
            <video id="background-video" loop autoPlay>
                    <source src={coding} type="video/mp4" />
                    <source src={coding} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
               
         
        );
      }
}

export default Homeheader;