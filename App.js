import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const appRouter = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/about", element: <About />, errorElement: <Error name="hi" /> }, // this error element only display when the error in the about page for any other url mismatch the mmain error element will display
  { path: "/contact", element: <Contact /> },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
// normal way of rendering
// root.render(<App />);

root.render(<RouterProvider router={appRouter} />);
