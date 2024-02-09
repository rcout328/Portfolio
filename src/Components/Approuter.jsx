import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Project from "./Project";
import ContactForm from "./Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
]);
const Approuter = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Approuter;
