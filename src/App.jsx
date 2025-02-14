import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'
import Header from './components/Header/Header';
import BackGround from './components/BackGround/BackGround';
import Body from './components/Body/Body';

const App = () => {
  return (
        <div className={`relative`}>
            <BackGround/>
            <Header/>
            <Body/>
        </div>
  )
}

export default App