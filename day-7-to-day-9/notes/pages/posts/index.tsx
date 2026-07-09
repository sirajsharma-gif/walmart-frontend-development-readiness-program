import { NextPage, GetStaticPropsResult } from "next";
import Link from "next/link";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostListProps = {
  posts: Post[];
};

const PostList: NextPage<PostListProps> = ({ posts }) => {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`posts/${post.id}`} passHref>
          <h2>
            {post.id} {post.title}
          </h2>
          <hr />
        </Link>
      ))}
    </>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PostListProps>
> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}

export default PostList;
