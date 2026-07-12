import { NextPage } from "next";

const CategoryPage: NextPage = () => {
  return (
    <main className="container">
      {/* route: /category/[...slug] — breadcrumb depth mirrors params.slug array */}
      <nav className="breadcrumb">
        <a href="index.html">Home</a> / <a href="category.html">Electronics</a>{" "}
        / <span aria-current="page">Smartphones</span>
      </nav>

      <div className="page-head">
        <div className="eyebrow">Category</div>
        <h1>Smartphones</h1>
        <p className="muted">
          42 products · a deeper path like
          /category/electronics/smartphones/android renders this same file
        </p>
      </div>

      {/* component: SubcategoryPills */}
      <div className="chips" style={{ marginBottom: "28px" }}>
        <a className="chip" href="#">
          Android
        </a>
        <a className="chip" href="#">
          iOS
        </a>
        <a className="chip" href="#">
          Foldables
        </a>
        <a className="chip" href="#">
          Refurbished
        </a>
      </div>

      <div className="product-grid">
        <article className="product-card">
          <div className="img-ph">IMG</div>
          <div className="product-card-body">
            <h3 className="product-card-title">
              <a href="product-detail.html">iPhone 9 — 64GB</a>
            </h3>
            <div className="rating">
              ★★★★☆ <span className="muted">4.6</span>
            </div>
            <div>
              <span className="price">$549.00</span>
            </div>
            <button className="btn btn-sm">Add to cart</button>
          </div>
        </article>
        <article className="product-card">
          <div className="img-ph">IMG</div>
          <div className="product-card-body">
            <h3 className="product-card-title">
              <a href="product-detail.html">Galaxy S24</a>
            </h3>
            <div className="rating">
              ★★★★☆ <span className="muted">4.5</span>
            </div>
            <div>
              <span className="price">$799.00</span>
            </div>
            <button className="btn btn-sm">Add to cart</button>
          </div>
        </article>
        <article className="product-card">
          <div className="img-ph">IMG</div>
          <div className="product-card-body">
            <h3 className="product-card-title">
              <a href="product-detail.html">Pixel 9</a>
            </h3>
            <div className="rating">
              ★★★★☆ <span className="muted">4.6</span>
            </div>
            <div>
              <span className="price">$699.00</span>
            </div>
            <button className="btn btn-sm">Add to cart</button>
          </div>
        </article>
        <article className="product-card">
          <div className="img-ph">IMG</div>
          <div className="product-card-body">
            <h3 className="product-card-title">
              <a href="product-detail.html">OnePlus 12</a>
            </h3>
            <div className="rating">
              ★★★★☆ <span className="muted">4.4</span>
            </div>
            <div>
              <span className="price">$649.00</span>
            </div>
            <button className="btn btn-sm">Add to cart</button>
          </div>
        </article>
      </div>

      <nav className="pagination" aria-label="Pagination">
        <a className="page-link" href="#" aria-current="page">
          1
        </a>
        <a className="page-link" href="#">
          2
        </a>
        <a className="page-link" href="#">
          3
        </a>
      </nav>
    </main>
  );
};

export default CategoryPage;
