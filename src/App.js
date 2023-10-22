import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './index.css';
import Navbar from '../src/components/Navbar';
import Home from './pages/home';
import Books from './pages/books';
import Bio from './pages/bio';
import Events from './pages/events';
import Book1 from './pages/bookone';
import Book2 from './pages/booktwo';
import Book3 from './pages/bookthree';
import Book4 from './pages/bookfour';
import Book5 from './pages/bookfive';
import Footer from '../src/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <HashRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/events" element={<Events />} />
        <Route path="/books/bookone" element={<Book1 />} />
        <Route path="/books/booktwo" element={<Book2 />} />
        <Route path="/books/bookthree" element={<Book3 />} />
        <Route path="/books/bookfour" element={<Book4 />} />
        <Route path="/books/bookfive" element={<Book5 />} />

      </Routes>

      <Footer />
      {/* <Outlet /> */}
    </HashRouter>
  )
}

export default App;