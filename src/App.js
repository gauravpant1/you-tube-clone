import Head from "./components/Head";
import "./App.css";
import "./index.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

function App() {

  const appRouter = createBrowserRouter([{
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'watch',
        element:<WatchPage/>
      }
    ]
  }])

  return (
    <Provider store={store}>
      <div>
        <Head />
       <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
