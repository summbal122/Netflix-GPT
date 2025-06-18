 import "./output.css";
 import {  createBrowserRouter, RouterProvider } from "react-router";
 import Browse from "./components/Browse";
 import SignUp from "./components/SignUp";
 import Login from "./components/Login";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, // ✅ use Body as parent layout
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

function App() {

  return (
    <div> 
      <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
    </Provider>
    </div>
  )
}

export default App;
