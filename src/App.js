import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/home/Header';
import Prototypes from './components/home/Prototypes';
import Orders from './components/home/Orders';
import Footer from './components/home/Footer';
import Checkout from './components/checkout/Checkout';
import Detail from './components/home/Detail';
import NotFound from './components/home/NotFound';
import AppStateProvider from './Providers/AppStateProvider';

function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="container">
                  <Prototypes />
                  <Orders />
                  <Footer />
                </div>
              </>
            }
          ></Route>
          <Route path="/order" element={<Checkout />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;
