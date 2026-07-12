import type { NextPage } from "next";

import { CategoryTiles, FeaturedProducts, Hero } from "../components";

const Home: NextPage = () => {
  return (
    <main className="container">
      {/* component: Hero */}
      <Hero />

      {/* component: FeaturedProducts (ISR data) */}
      <FeaturedProducts />

      {/* component: CategoryTiles */}
      <CategoryTiles />
    </main>
  );
};

export default Home;
