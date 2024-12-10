import Business from "./components/Business"
import CardDeal from "./components/CardDeal"
import Clients from "./components/Clients"
import CTA from "./components/CTA"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Product from "./components/Product"
import Stats from "./components/Stats"

function App() {

  return <>
    <div className="bg-black-gradient">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Product />
      <Business />
      <CardDeal />
      <Clients />
      <CTA />
      <Footer />
    </div>
  </>
}
export default App