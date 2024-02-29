import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage';
import Projects from './components/Projects/Projects';
import About from './components/About';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <>
          <Header />
          <HomePage />
        </>
      ,
    },
    {
      path: '/about',
      element:
        <>
          <Header />
          <About />
        </>
      ,
    },
    {
      path: '/skills',
      element:
        <>
          <Header />
          <Skills />
        </>,
    },
    {
      path: '/projects',
      element:
        <>
          <Header />
          <Projects />
        </>,
    },
    {
      path: '/contacts',
      element: <>
        <Header />
        <Contacts />
      </>,
    }
  ]
);

function App() {

  return (
    <div className='app'>

      {/* using router route to the intended page */}
      <RouterProvider router={router} />

      <Footer />
    </div>
  )
}

export default App
