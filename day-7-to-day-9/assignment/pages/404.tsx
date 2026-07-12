import { NextPage } from "next";
import Link from "next/link";

const PageNotFound: NextPage = () => {
  return (
    <main className="container">
      {/* Next.js always statically generates /404 — it must work even when the server is down */}
      <div className="notfound">
        <div className="code">404</div>
        <h1>This page took a wrong turn</h1>
        <p className="muted">
          The product may have been removed, or the URL has a typo.
        </p>
        <Link className="btn btn-primary" href="/" passHref>
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default PageNotFound;
