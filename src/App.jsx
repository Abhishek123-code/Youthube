import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "./components/MainContainer";
import WatchPage from "./components/watchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Maincontainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "demo",
          element: (
            <>
              <Demo />
              <Demo2 />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <RouterProvider router={appRouter} />

        {/**
    header
    Body
    menuItems
    Maincontainer
    Buttonlist
    VideoContainer
    videocard     
    */}
      </div>
    </Provider>
  );
}

export default App;
