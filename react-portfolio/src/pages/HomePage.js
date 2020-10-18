import React from 'react';
import Hero from '../components/Hero';
import Card from "../components/Card";
import Carousel from '../components/Carousel';
import CardInfo from "../components/CardInfo";

import AboutPage from './AboutPage';
import ContactPage from "./ContactPage";



function HomePage(props) {
    return (
      <>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

        <div>
          <AboutPage />
        </div>

        <div >
          <CardInfo />
        </div>


        <div>
          <ContactPage />
        </div>
      </>
    );
}

export default HomePage;
