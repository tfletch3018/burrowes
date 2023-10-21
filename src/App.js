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

      </Routes>

      <Footer />

      <Outlet />

    </HashRouter>
  )
}

export default App;