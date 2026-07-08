import { NextPage } from "next";
import { useRouter } from "next/router";

const Review: NextPage = () => {
  const router = useRouter();
  const reviewId = router.query.reviewId;

  return <h1>Review Page: {reviewId}</h1>;
};

export default Review;
