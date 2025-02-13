import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/redux/store'; 
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header/Header';
import BackGround from './components/BackGround/BackGround';
import Body from './components/Body/Body';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={`relative`}>
            <BackGround/>
            <Header/>
            <Body/>
            <AppRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App