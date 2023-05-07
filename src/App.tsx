// import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  // const router = createBrowserRouter(
  //   [
  //     {
  //       path: '/',
  //       element: (
  //         <div>
  //           <h1>Hello World</h1>
  //           <Link to='about'>About Us</Link>
  //         </div>
  //       ),
  //     },
  //     {
  //       path: 'about',
  //       element: <div>About</div>,
  //     },
  //   ],
  //   { basename: import.meta.env.DEV ? '/' : '/react-vite-gh-pages/' }
  // )

  // return <RouterProvider router={router} />
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}
    >
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <h1>Hello World</h1>
              <Link to='about'>About Us</Link>
            </div>
          }
        />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
