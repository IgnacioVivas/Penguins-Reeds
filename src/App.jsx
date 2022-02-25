import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import Slider from './components/carousel/Carousel';
import Header from './components/header/Header';
import BannerSuperior from './components/banner/BannerSuperior';
import Instrumentos from './components/instrumentos/instrumentos';
import BannerInferior from './components/banner/BannerInferior';
import ProductosDestacados from './components/productosDestacados/ProductosDestacados';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <Slider/>
      <BannerSuperior/>
      <Instrumentos/>
      <BannerInferior/>
      <ProductosDestacados/>
      <Footer/>
    </div>
  )
}

export default App
