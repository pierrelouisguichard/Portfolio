import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Ensure TypeScript knows the element exists and is the correct type
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  throw new Error("Root element not found");
}
