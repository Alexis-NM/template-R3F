import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

import "./style.css";

const router = createBrowserRouter([
  {
    element: <Experience />,
    children: [{ path: "/", element: <Experience /> }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <RouterProvider router={router} />
      <Experience />
    </Canvas>
  </StrictMode>
);
