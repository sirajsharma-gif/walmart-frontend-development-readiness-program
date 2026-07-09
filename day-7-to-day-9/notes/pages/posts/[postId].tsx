import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";

import type { Post } from ".";
import { useRouter } from "next/router";

type PostParams = {
  postId: string;
};

type PostPageProps = {
  post: Post;
};

const Post: NextPage<PostPageProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

export function getStaticPaths(): GetStaticPathsResult<PostParams> {
  const paths: Array<{
    params: PostParams;
    locale?: string;
  }> = [];

  for (let i = 1; i <= 100; i++) {
    paths.push({
      params: {
        postId: i.toString(),
      },
    });
  }

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<PostParams>,
): Promise<GetStaticPropsResult<PostPageProps>> {
  const { params } = context;

  //   console.log("Prams: ", params);

  if (!params) {
    return {
      notFound: true,
    };
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  );
  const data = (await response.json()) as Post;

  if (!data?.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}
