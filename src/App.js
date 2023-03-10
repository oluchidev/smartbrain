import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from "react-tsparticles";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';


class App extends Component {
  render() {
    return (
      <div className="App">
<Particles params={"ParticlesOption"} />

    <Navigation />
    <Logo/>
    <Rank/>
    <ImageLinkForm />
    {/*
     <FaceRecognition /> } */}
      </div>
    );
  }
  }

export default App;
