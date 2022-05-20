import React from 'react'
import './App.css'
import { GlobalStyle } from './globalStyle'
import { ModalPage } from './components/modal/Modal'
import ServicePage from './pages/services_page/SevicesPage'

function App() {
  return (
    <div>
      <GlobalStyle />
      <ModalPage />
      {/* <ServicePage /> */}
    </div>
  )
}

export default App
