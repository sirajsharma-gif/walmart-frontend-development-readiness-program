import { GetServerSidePropsResult, NextPage } from "next";

export type Articles = {
  id: number;
  title: string;
  description: string;
  category: string;
};

type NewsArticleListProps = {
  articles: Articles[];
};

const NewsArticleList: NextPage<NewsArticleListProps> = ({ articles }) => {
  return (
    <>
      <h1>List of News Articles</h1>
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

export default NewsArticleList;

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<NewsArticleListProps>
> {
  const response = await fetch("http://localhost:4200/news");
  const data = (await response.json()) as Articles[];

  return {
    props: {
      articles: data,
    },
  };
}
