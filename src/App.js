import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './Comonents/Header';
import productListing from './Comonents/productListing';
import productDetails from './Comonents/productDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path="/" exact Component={productListing}/>
      <Route path="/product/:productId" exact Component={productDetails}/>
      <Route>404 not found</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
