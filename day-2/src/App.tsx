import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";

import styles from "./App.module.scss";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Gallery />
        <ProductDetail />
      </main>
    </>
  );
}

export default App;
