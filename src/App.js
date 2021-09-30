import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './component/error/NotFound';
import Navbar from './component/navbar/navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import { Home } from './pages/home';
import Footer from './component/footer/footer';
import Productions from './pages/Productions';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/portefolio' exact component={Portfolio} />
        <Route path='/about' exact component={About} />
        <Route path='/products' exact component={Productions} />
        <Route path='/contact' exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
