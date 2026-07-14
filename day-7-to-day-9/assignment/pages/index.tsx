import type { GetStaticPropsResult, NextPage } from "next";

import { CategoryTiles, FeaturedProducts, Hero } from "../components";

import { TCategory } from "../models/category";
import { TProduct } from "../models/product";

export const getCategories = async (): Promise<TCategory[]> => {
  const response = await fetch(`${process.env.API_BASE_URL}/categories`);
  const result = await response.json();
  return result;
};

export const getFeaturedProducts = async (): Promise<TProduct[]> => {
  const response = await fetch(`${process.env.API_BASE_URL}/featuredProducts`);
  const result = await response.json();
  return result;
};

type HomePageProps = {
  categories: TCategory[];
  products: TProduct[];
};

const Home: NextPage<HomePageProps> = ({ categories, products }) => {
  return (
    <main className="container">
      {/* component: Hero */}
      <Hero />

      {/* component: FeaturedProducts (ISR data) */}
      <FeaturedProducts products={products} />

      {/* component: CategoryTiles */}
      <CategoryTiles categories={categories} />
    </main>
  );
};

export default Home;

export async function getStaticProps(): Promise<
  GetStaticPropsResult<HomePageProps>
> {
  const [categories, products] = await Promise.all([
    getCategories(),
    getFeaturedProducts(),
  ]);

  return {
    props: {
      categories,
      products,
    },
  };
}
