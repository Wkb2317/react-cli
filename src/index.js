import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b'
      }
    }}
  >
    <App />
  </ConfigProvider>
)
