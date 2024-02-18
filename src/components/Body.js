import RestraurantCard from "./RestraurantCard";
import { restaurantCardsData } from "./utils/mockData";
import { useState}  from "react";

const Body = () => {

    const [rescared, setRescard]=useState(restaurantCardsData);
    const filterdata = ()=>{
        const filterdata = rescared.filter((data)=>{
           return data.info.avgRating   >4
            
        })
        setRescard(filterdata);
    }
    return (
      <div className="restraurant-contaniner">
        <div className="search-bar">
          <h3>Serach-bar</h3>
        </div>
        <div>
            <button className="avg-filter" onClick={filterdata}>topRest</button>
        </div>
        <div className="restraurant-card">
          {rescared.map((resCrad) => {
            return <RestraurantCard key={resCrad.info.id} resData={resCrad} />;
          })}
        </div>
      </div>
    );
  };
  export default Body;