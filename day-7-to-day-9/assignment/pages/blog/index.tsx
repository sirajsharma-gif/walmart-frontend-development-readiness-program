const BlogPage = () => {
  return (
    <main className="container">
      <div className="page-head">
        <div className="eyebrow">Blog</div>
        <h1>News and buying guides</h1>
      </div>
      <div className="post-list">
        {/* component: PostCard — repeat per post */}
        <article className="card post-card">
          <div className="post-meta">JULY 2026 · GUIDES</div>
          <h3>
            <a href="blog-post.html">How to pick a monitor you won't return</a>
          </h3>
          <p className="muted">
            Refresh rate, panel type, and the one spec everyone ignores.
          </p>
          <a href="blog-post.html">Read →</a>
        </article>
        <article className="card post-card">
          <div className="post-meta">JUNE 2026 · NEWS</div>
          <h3>
            <a href="blog-post.html">The mid-year audio sale is live</a>
          </h3>
          <p className="muted">
            Headphones and speakers up to 40% off through Sunday.
          </p>
          <a href="blog-post.html">Read →</a>
        </article>
        <article className="card post-card">
          <div className="post-meta">MAY 2026 · GUIDES</div>
          <h3>
            <a href="blog-post.html">Laptop RAM: how much is enough in 2026</a>
          </h3>
          <p className="muted">
            Spoiler: probably less than the upsell suggests.
          </p>
          <a href="blog-post.html">Read →</a>
        </article>
      </div>
    </main>
  );
};

export default BlogPage;
