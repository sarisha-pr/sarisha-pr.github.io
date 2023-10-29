import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Advice from "./pages/Advice.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ArtGallery from "./pages/art-gallery/ArtGallery.tsx";
import ArtGalleryyDesignSystem from "./pages/art-gallery/ArtGalleryyDesignSystem.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/advice",
    element: <Advice />,
  },
  {
    path: "/art-gallery-design-system",
    element: <ArtGalleryyDesignSystem />,
  },
  {
    path: "/art-gallery",
    element: <ArtGallery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
