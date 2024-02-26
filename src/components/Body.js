import RestraurantCard from "./RestraurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //Api data state variable
  const [rescared, setRescard] = useState([]);
  //search text update state variable
  const [searchText, setsearchText] = useState([]);
// updateing the search onclick filterdata


  let [searchApiData,setSearchApiData] = useState([]);

  // when the state variable update, react triggers the reconcilation cycle(re-render the componet)
  console.log("body component render");
 

  useEffect(() => {
    resCardsData();
  },[]);

  const resCardsData = async () => {
    try{
      console.log('j');
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // waitng for the json
    const apisuData = await apiData.json();
    const actualData =apisuData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      
    setRescard(actualData);
    setSearchApiData(actualData);

  }
    catch(err){console.error(err);}
    

  };

  const filterdata = () => {
    // Try to filter if the top-rated restaurant is clicked, search only for that
// Implementation is below
    const filterdata = rescared.filter((data) => {
      return data.info.avgRating > 4.2;
    });
    setRescard(filterdata);
    setSearchApiData(filterdata);
  };

  return rescared.length ? (
    <div className="restraurant-contaniner">
      <div className="search-bar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            console.log(e.target);
            setsearchText(e.target.value);
            const searchData = rescared.filter((res) => {
              
              //why emty string return includes method true?
              return res.info.name.toLowerCase().includes(e.target.value.toLowerCase());
            });
           
            setSearchApiData(searchData);
          }}
        />
        <button
          onClick={() => {
            const searchData = rescared.filter((res) => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            });
            
            setSearchApiData(searchData);
          }}
        >
          search
        </button>
      </div>
      <div>
        <button className="avg-filter" onClick={filterdata}>
          topRest
        </button>
      </div>
      <div className="restraurant-card">
        {searchApiData.map((resCrad) => {
          return(
          <div key={resCrad.info.id}><Link  to={"/restraurant/"+resCrad.info.id} > <RestraurantCard  resData={resCrad} /></Link></div>);
        })}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};
export default Body;
