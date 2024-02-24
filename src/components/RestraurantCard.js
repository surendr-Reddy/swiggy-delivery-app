import { CDN_URL } from "./utils/constants";

//props:{resData:info{here is the data}}
 const RestraurantCard = (props) => {
    const { name, avgRating, deliveryTime, cuisines, cloudinaryImageId } =
      props.resData.info;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL +
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
  export default RestraurantCard;