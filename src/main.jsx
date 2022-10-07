import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './Home/App'
import { MainPage } from './MainPage'
import { Register } from './Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<App/>}/>
        <Route path='/mainpage' element={<MainPage/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
