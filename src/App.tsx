import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to='about'>About Us</Link>
        </div>
      ),
    },
    {
      path: 'about',
      element: <div>About</div>,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
