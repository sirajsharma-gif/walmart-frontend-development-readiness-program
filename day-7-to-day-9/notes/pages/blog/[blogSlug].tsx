import { NextPage } from "next";
import { useRouter } from "next/router";

const BlogPost: NextPage = () => {
  const router = useRouter();
  const slug = router.query.blogSlug;

  return <h1>Blog Post Page: {slug}</h1>;
};

export default BlogPost;
