import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <main className="container">
      <article className="article">
        <div className="eyebrow">About</div>
        <h1>Built to answer one question</h1>
        <p>
          NexShop exists to force a rendering decision on every page. This page
          is pure SSG — it was generated once at build time and will never
          change until the next deploy.
        </p>
        <p>
          Rendered at: <span className="mono">2026-07-10T00:00:00.000Z</span>{" "}
          <span className="muted">
            (wire this to a timestamp from getStaticProps and watch it never
            move)
          </span>
        </p>
      </article>
    </main>
  );
};

export default AboutPage;
