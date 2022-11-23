import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Event from './Component/Event/Event'
import Click from './Component/Event/Click'


// birinci ve ikinci tapsiriqlar
ReactDOM.createRoot(document.getElementById('root')).render(
 <>
  <Event/>
  <br></br>
  <Click/>
 </>
)
