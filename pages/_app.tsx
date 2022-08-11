import Layout from "../components/layout";
import "../styles/global.scss";

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
