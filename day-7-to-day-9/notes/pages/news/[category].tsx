import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import { type Articles } from ".";
import { useRouter } from "next/router";

type CategoryParams = {
  category: string;
};

type ArticleListByCategoryProps = {
  articles: Articles[];
};

const ArticleListByCategory: NextPage<ArticleListByCategoryProps> = ({
  articles,
}) => {
  const router = useRouter();

  const { category } = router.query;

  return (
    <>
      <h1>List of {category} news articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} | {article.category}
          </h2>
        </div>
      ))}
    </>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(
  context: GetServerSidePropsContext<CategoryParams>,
): Promise<GetServerSidePropsResult<ArticleListByCategoryProps>> {
  const { params } = context;

  const response = await fetch(
    `http://localhost:4200/news?category=${params?.category ?? "sports"}`,
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
