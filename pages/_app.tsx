import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'
import CartProvider from '@store/Cart'

/* export function reportWebVitals(metric) {
  //* And here we can export the data of the performance and access times to external servers, like Google Analytics
} */

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
