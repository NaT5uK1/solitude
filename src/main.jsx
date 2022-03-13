import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'virtual:windi.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Calculator from './routes/Calculator'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='calc/:team' element={<Calculator/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
