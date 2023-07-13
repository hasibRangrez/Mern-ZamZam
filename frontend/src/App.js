import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">ZamZam</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
