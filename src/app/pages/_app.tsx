import { BlogProvider } from '../context/BlogContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <BlogProvider>
      <Component {...pageProps} />
    </BlogProvider>
  );
}

export default MyApp;
