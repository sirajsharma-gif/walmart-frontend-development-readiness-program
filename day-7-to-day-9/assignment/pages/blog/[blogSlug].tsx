import { NextPage } from "next";
import Link from "next/link";

const BlogPostPage: NextPage = () => {
  return (
    <main className="container">
      <article className="article">
        <nav className="breadcrumb">
          <Link href="/blog">Blog</Link> /{" "}
          <span aria-current="page">How to pick a monitor</span>
        </nav>
        <div className="post-meta">JULY 2026 · GUIDES · 6 MIN READ</div>
        <h1>How to pick a monitor you won't return</h1>
        <p>
          Most monitor regret comes from optimizing the wrong spec. Buyers
          compare resolution first, but panel type and pixel density per viewing
          distance predict satisfaction far better.
        </p>
        <div
          className="img-ph"
          style={{
            aspectRatio: "16/9",
            borderRadius: "10px",
            marginBottom: "1.5rem",
          }}
        >
          COVER 16:9
        </div>
        <h2>Start with the panel</h2>
        <p>
          IPS for color work, VA for contrast-heavy media, OLED if burn-in risk
          fits your usage. Replace this copy with the DummyJSON post body — the
          point of this page is getStaticPaths with fallback: false.
        </p>
      </article>
    </main>
  );
};

export default BlogPostPage;
