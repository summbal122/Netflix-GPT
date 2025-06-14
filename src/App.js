 import "./output.css";
 import Body from "./components/Body";
 import {  createBrowserRouter, RouterProvider } from "react-router";
 import Browse from "./components/Browse";
 import SignUp from "./components/SignUp";
import Login from "./components/Login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <Body/>
  },
   {
    path: "/browse",
    element : <Browse/>
  },
   {
    path: "/login",
    element : <Login/>
  },
  {
    path:"/signup",
    element: <SignUp/>

  },

]);

function App() {
  return (
    <div> 
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App;
