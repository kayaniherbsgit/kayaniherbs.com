// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        colors: {
          kayani: [
            "#e8f8f0",
            "#d0f1e1",
            "#a1e3c3",
            "#72d5a4",
            "#43c786",
            "#23b96c",
            "#1a9f5b",
            "#147d3a",
            "#0e5b29",
            "#073a18",
          ],
        },
        primaryColor: "kayani",
        primaryShade: 6,
        fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
