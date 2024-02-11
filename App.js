import React from "react";
import ReactDom from "react-dom/client";
import logo from './images/logo.jpg';

import healthyStreet from './images/healthy-food.jpg';

/**
  HEADER
   -logo
   -nav bar
BODY
   -search
   -restraurantContainer
    -restraurant-card
     -logo
     -name
     -startrating
     -delivary-time
   -restaurantCards
FOOTOER
  -copyrigth 
  -socialmedialinks
  -adress 
  -contanct 
  **/
 const heading =React.createElement("div",{},"welcome to javascript");
 const headinge=<div>hi</div>
const Heading = ()=><><div> hihi</div><div> hihi</div></>


const Header =()=>{
    return (
<div className="header">
     <div className="logoContainer">
        <img className="logo" src={logo} alt="Logo"/>
    </div>
 <div className="nav-items">
  <ul>
     <li>Home</li>
     <li>About</li>
     <li>contact Us</li>
     <li>Cart</li>
</ul>
    </div>
</div>
    )
}

const RestraurantCard = ()=>{
    return(
        
<div className="res-card" >
     <img className="res-logo"  src={healthyStreet}/>
     
    <div className="resName"><h2>HealthyStreet</h2></div>
    <div className="resName"> <h2>salad,sprouts</h2></div>
    <div className="start-rating"><h4>Rating :4.9 rating</h4></div>
    <div className="delivery"><h4>Delivery Time:45min</h4></div>
</div>
        

    )
}

const Body =()=>{
    return (
        <div className="restraurant-contaniner">
        <div className="search-bar"><h3>Serach-bar</h3></div>
        <div className="restraurant-card">
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>
            <RestraurantCard/>

        </div>
        </div>
    )
}

 

const App =() => {
    return (<>
<Header/>
<Body/>
</>
    )
}

 const root =ReactDom.createRoot(document.getElementById("root"));
 root.render(<App/>);