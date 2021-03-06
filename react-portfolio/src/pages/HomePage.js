import React from 'react';
import Hero from '../components/Hero';

import Carousel from '../components/Carousel';
import CardInfo from "../components/CardInfo";

import AboutPage from './AboutPage';
import ContactPage from "./ContactPage";
// import portfolio from '../components/Card';



function HomePage(props) {
    return (
      <>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

        <div>
          <AboutPage />
        </div>

        {/* <div>
          <AboutPage />
        </div> */}

        <div>
          <Carousel />
        </div>
      </>
    );
}

export default HomePage;
