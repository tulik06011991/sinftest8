import '@/styles/globals.css';
import Navbar from './Navbar'
import Footer from './Footer'

export default function App({ Component, pageProps }) {
  return(<div>
    <Navbar/>
    <Component {...pageProps} />;
    <Footer/>

  </div>
    
  ) 
}
