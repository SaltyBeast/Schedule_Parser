import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Schedule from "./components/Schedules/Schedule";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/fi_schedule",
        element: <Schedule whatSchedule="FI" showText={false} />,
      },
      {
        path: "/fen_schedule",
        element: <Schedule whatSchedule="FEN" showText={false} />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
