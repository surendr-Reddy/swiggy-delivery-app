import { useRouteError } from "react-router-dom";

const Error = function (props) {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error">
      <h1>Error{props.name}</h1>
      <h2>{error.status}</h2>
      <h3>{error.data}</h3>
    </div>
  );
};
export default Error;
