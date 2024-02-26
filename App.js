import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
     <Outlet/>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About />  },
      { path: "/contact", element: <Contact /> }

    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
// normal way of rendering
// root.render(<App />);

root.render(<RouterProvider router={appRouter} />);
