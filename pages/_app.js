import '../styles/globals.css'
import axios from "axios";
import { wrapper } from "../redux/store";

 function App({ Component, pageProps }) {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
  return <Component {...pageProps} />
}
export default wrapper.withRedux(App);