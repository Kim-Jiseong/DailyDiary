import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './GlobalStyle'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import App from './App'
// import Admin from 'pages/admin'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            {/* <Route path="/main" element={<Admin />} /> */}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </GlobalStyle>
  </React.StrictMode>,
)
