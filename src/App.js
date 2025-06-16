 import "./output.css";
 import {  createBrowserRouter, RouterProvider } from "react-router";
 import Browse from "./components/Browse";
 import SignUp from "./components/SignUp";
 import Login from "./components/Login";

import appStore from "./utils/appStore";
import { Provider } from "react-redux";


const appRouter = createBrowserRouter([

  {
    path: "/",
    element : <Login/>
  },
   {
    path: "/browse",
    element : <Browse/>
  },
  {
    path:"/signup",
    element: <SignUp/>

  },
  {
    path:"/login",
    element: <Login/>
  }

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
