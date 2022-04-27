import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { NavBar, Exchanges, CryptoCurrencies, CryptoDetails, HomePage, News, Footer } from './components'


function App() {
  return (
    <div className="app-container">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
