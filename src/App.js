import logo from './logo.svg';
import './App.css';

import Intro from './components/Intro/Intro';
import ProductList from './components/ProductList/ProductList';
import About from './components/About/About'
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList />
      <Subscribe />
    </div>
  );
}

export default App;
