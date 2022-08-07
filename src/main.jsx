import React from "react"
import "./index.css"
import App from "./App"
import "virtual:windi.css"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Calculator from "./routes/Calculator"
import ErrorPage from "./routes/ErrorPage"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="calc/:team" element={<Calculator />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
