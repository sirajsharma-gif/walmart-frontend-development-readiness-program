import { NextPage } from "next";
import { useRouter } from "next/router";

const Product: NextPage = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return <h1>Product Page: {productId}</h1>;
};

export default Product;
