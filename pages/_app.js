import ProductProvider from '../contexts/ProductProvider/ProductProvider';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}
