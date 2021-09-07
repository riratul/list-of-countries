import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import Header from './components/Header'
import Body from './containers/Body'
import Footer from './components/Footer'


function App() {
  return (
      <>
        <Header />
        <Body />
        <Footer/>
      </>
  )
}

export default App
