const Shimmer = () => {
  return (<div className="shimmer-continer">
    {Array(10).fill("").map((e,index)=>{ return <div key={index} className="shimmer_card"></div>})}

  </div>);
};
export default Shimmer;