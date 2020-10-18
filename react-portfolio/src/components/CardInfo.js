
import React from 'react'
import Card from '../components/Card'
import drinkology from "../assets/images/drinkology.png";
import todolist from "../assets/images/To-do-list.png";
import Button  from "react-bootstrap/Button"
import "./Card.css";



class CardInfo extends React.Component{
    render ()
{
   return (
     <div className="container-fluid d-flex justify-content-center">
       <div className="row">
         <div className="col-md-4">
           <Card  imgsrc={drinkology} />
         </div>
         <div className="col-md-4">
           <Card  imgsrc={todolist} />
         </div>
         <div className="col-md-4">
           <Card  imgsrc={drinkology} />
         </div>

     </div>

     </div>

    
   );
}    
}

export default CardInfo;
