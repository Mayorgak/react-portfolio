import React from 'react';
import Hero from '../components/Hero';
import Card from "../components/Card";
import Carousel from '../components/Carousel';



function HomePage(props) {
    return (
      <>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        <Card/>
        <Carousel/>
       
       
      </>
    );
}

export default HomePage;
