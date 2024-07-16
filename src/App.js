import React from "react";
import Dashboard from "./pages/Dashboard";
import StoriesDetail from './components/StoriesDetail/StoriesDetail';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/"  element={<Dashboard  />} />
         <Route 
        path='/stories/:id' 
        element={<StoriesDetail />}
      />
      </>
    )
  );

  return (
      <RouterProvider router={routes} />
      
  );
};

export default App;
