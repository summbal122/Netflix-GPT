 import "./output.css";
 import {  createBrowserRouter, RouterProvider } from "react-router";
 import Browse from "./components/Browse";
 import SignUp from "./components/SignUp";
 import Login from "./components/Login";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import GptSearch from "./components/GptSearch";



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
      { 
        path: "/GPT_Search",
        element: <GptSearch/>
      },
    ],
  },
]);

function App() {

  return (
    <div> 
      <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
    <Footer/>
    </Provider>
    </div>
  )
}

export default App;
