import React from 'react'
import './style.scss';
import { Provider } from "react-redux";
import { store } from "./app/store";
import Homepage from './pages/Home/Homepage'

function App() {
  return (
    <>
        <Provider store={store}>
          <Homepage />
        </Provider>
    </>
  )
}

export default App