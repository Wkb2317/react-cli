import React, { Suspense, lazy } from 'react'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import { Button } from 'antd'
import './index.less'

const About = lazy(() => import('./pages/About/index'))
const Home = lazy(() => import('./pages/Home/index'))

export default function App() {
  return (
    <div>
      <p>App</p>
      <Button type="primary">点击</Button>
      <BrowserRouter>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}
