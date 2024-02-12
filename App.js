import React from "react";
import ReactDom from "react-dom/client";
import logo from "./images/logo.jpg";

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
const heading = React.createElement("div", {}, "welcome to javascript");
const headinge = <div>hi</div>;
const Heading = () => (
  <>
    <div> hihi</div>
    <div> hihi</div>
  </>
);

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="Logo" />
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
  );
};

const restaurantCardsData = [
  {
    info: {
      id: "326429",
      name: "Punjabi Angithi (Vegorama Group)",
      cloudinaryImageId: "lgfkquq3npd3r9oiy62b",
      locality: "Satyawati Colony",
      areaName: "Ashok vihar",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Chinese", "Punjabi", "Snacks"],
      avgRating: 4.2,

      deliveryTime: 32,
    },
  },
  {
    info: {
      id: "169483",
      name: "Bakingo",
      cloudinaryImageId: "05994df0e49725bd230146c320b8f7aa",
      locality: "West Arjun Nagar",
      areaName: "Krishna Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.4,
      deliveryTime: 33,
    },
  },

  {
    info: {
      id: "399525",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Kashmere Gate Metro Station",
      areaName: "Kashmiri Gate",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.2,
      deliveryTime: 25,
    },
  },
  {
    info: {
      id: "38925",
      name: "Domino's Pizza",
      cloudinaryImageId: "mdl4tnyc8wbvysqxzhnq",
      locality: "Netaji Subhash Marg",
      areaName: "Daryaganj",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,

      deliveryTime: 25,
    },
  },
];

//props:{resData:info{here is the data}}
const RestraurantCard = (props) => {
  console.log(props);
  const { name, avgRating, deliveryTime, cuisines, cloudinaryImageId } =
    props.resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />

      <div className="resName">
        <h2>{name}</h2>
      </div>
      <div className="resName">
        {" "}
        <h3>{cuisines.join(",")}</h3>
      </div>
      <div className="start-rating">
        <h4>Rating :{avgRating}</h4>
      </div>
      <div className="delivery">
        <h4>Delivery Time:{deliveryTime}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraurant-contaniner">
      <div className="search-bar">
        <h3>Serach-bar</h3>
      </div>
      <div className="restraurant-card">
        {restaurantCardsData.map((resCrad) => {
          return <RestraurantCard key={resCrad.info.id} resData={resCrad} />;
        })}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
