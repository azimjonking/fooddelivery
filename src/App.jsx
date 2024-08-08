import './App.css'
import Header from './components/header/Header'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Products from './components/products/Products'
import HowItWorks from './components/howItWorks/HowItWorks'
import Menu from './components/menu/Menu'
import Order from './components/order/Order'
import Call from './components/call/Call'
import Support from './components/support/Support'

function App() {

  return (
    <div className='App'>
      <Header />
      <Navbar />
      <main>
        <Home />
        <Products />
        <HowItWorks />
        <Menu />
        <Order />
        <Call />
        <Support />
      </main>
      <Footer />
    </div>
  )
}

export default App
