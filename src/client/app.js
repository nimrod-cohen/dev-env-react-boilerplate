import React from 'react'
import ReactDOM from 'react-dom'
import DummyComponent from './components/DummyComponent'
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
  <AppContainer>
    <DummyComponent />
  </AppContainer>,
  document.querySelector("#root")
)