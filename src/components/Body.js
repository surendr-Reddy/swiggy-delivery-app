import RestraurantCard from "./RestraurantCard";
import { restaurantCardsData } from "./utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [rescared, setRescard] = useState([]);

  useEffect(  async() => {
    //agaian waiting for the promise resolve 
    const resData =   await resCardsData();
    console.log(resData);
  }, []);

  const resCardsData = async () => {
    
    const apiData= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // waitng for the json
    const apisuData=await apiData.json();
    return  apisuData// return promise 
    

  };

  const filterdata = () => {
    const filterdata = rescared.filter((data) => {
      return data.info.avgRating > 4;
    });
    setRescard(filterdata);
  };
  return (
    <div className="restraurant-contaniner">
      <div className="search-bar">
        <h3>Serach-bar</h3>
      </div>
      <div>
        <button className="avg-filter" onClick={filterdata}>
          topRest
        </button>
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
