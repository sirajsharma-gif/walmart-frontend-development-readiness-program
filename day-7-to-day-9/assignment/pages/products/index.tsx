import { NextPage } from "next";

const ProductsPage: NextPage = () => {
  return (
    <main className="container">
      <div className="page-head">
        <div className="eyebrow">Catalog</div>
        <h1>All products</h1>
      </div>

      <div className="listing-layout">
        {/* component: FilterSidebar — every control writes to the URL, not local state */}
        <aside className="filter-sidebar">
          <div className="filter-group">
            <h3>Category</h3>
            <label className="filter-option">
              <input type="radio" name="category" checked /> All
            </label>
            <label className="filter-option">
              <input type="radio" name="category" /> Smartphones
            </label>
            <label className="filter-option">
              <input type="radio" name="category" /> Laptops
            </label>
            <label className="filter-option">
              <input type="radio" name="category" /> Audio
            </label>
            <label className="filter-option">
              <input type="radio" name="category" /> Monitors
            </label>
          </div>
          <div className="filter-group">
            <h3>Price</h3>
            <div className="price-range">
              <input
                type="number"
                placeholder="Min"
                aria-label="Minimum price"
              />
              <span className="muted">–</span>
              <input
                type="number"
                placeholder="Max"
                aria-label="Maximum price"
              />
            </div>
          </div>
          <div className="filter-group">
            <h3>Rating</h3>
            <label className="filter-option">
              <input type="checkbox" /> ★★★★ and up
            </label>
            <label className="filter-option">
              <input type="checkbox" /> ★★★ and up
            </label>
          </div>
          <button className="btn btn-block">Apply filters</button>
        </aside>

        <section>
          {/* component: ListingToolbar */}
          <div className="listing-toolbar">
            <span className="results-count">
              Showing <span className="mono">24</span> of{" "}
              <span className="mono">194</span> products
            </span>
            <select className="sort-select" aria-label="Sort products">
              <option>Sort: relevance</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
              <option>Rating</option>
            </select>
          </div>

          {/* component: FilterChips — mirrors the query string */}
          <div className="chips">
            <button className="chip">Laptops ✕</button>
            <button className="chip">$500 – $2,000 ✕</button>
            <button className="chip">Clear all</button>
          </div>

          <div className="product-grid">
            {/* component: ProductCard — repeat per result */}
            <article className="product-card">
              <div className="img-ph">IMG</div>
              <div className="product-card-body">
                <h3 className="product-card-title">
                  <a href="product-detail.html">MacBook Pro 14"</a>
                </h3>
                <div className="rating">
                  ★★★★★ <span className="muted">4.9</span>
                </div>
                <div>
                  <span className="price">$1,749.00</span>
                </div>
                <button className="btn btn-sm">Add to cart</button>
              </div>
            </article>
            <article className="product-card">
              <div className="img-ph">IMG</div>
              <div className="product-card-body">
                <h3 className="product-card-title">
                  <a href="product-detail.html">ThinkPad X1 Carbon</a>
                </h3>
                <div className="rating">
                  ★★★★☆ <span className="muted">4.6</span>
                </div>
                <div>
                  <span className="price">$1,299.00</span>
                </div>
                <button className="btn btn-sm">Add to cart</button>
              </div>
            </article>
            <article className="product-card">
              <div className="img-ph">IMG</div>
              <div className="product-card-body">
                <h3 className="product-card-title">
                  <a href="product-detail.html">ASUS Zenbook 14 OLED</a>
                </h3>
                <div className="rating">
                  ★★★★☆ <span className="muted">4.4</span>
                </div>
                <div>
                  <span className="price">$999.00</span>
                  <span className="price-old">$1,149.00</span>
                </div>
                <button className="btn btn-sm">Add to cart</button>
              </div>
            </article>
            <article className="product-card">
              <div className="img-ph">IMG</div>
              <div className="product-card-body">
                <h3 className="product-card-title">
                  <a href="product-detail.html">HP Spectre x360</a>
                </h3>
                <div className="rating">
                  ★★★★☆ <span className="muted">4.3</span>
                </div>
                <div>
                  <span className="price">$1,199.00</span>
                </div>
                <button className="btn btn-sm">Add to cart</button>
              </div>
            </article>
            <article className="product-card">
              <div className="img-ph">IMG</div>
              <div className="product-card-body">
                <h3 className="product-card-title">
                  <a href="product-detail.html">Dell XPS 15</a>
                </h3>
                <div className="rating">
                  ★★★★☆ <span className="muted">4.5</span>
                </div>
                <div>
                  <span className="price">$1,549.00</span>
                </div>
                <button className="btn btn-sm">Add to cart</button>
              </div>
            </article>
            <article className="product-card">
              <div className="img-ph">IMG</div>
              <div className="product-card-body">
                <h3 className="product-card-title">
                  <a href="product-detail.html">Framework Laptop 13</a>
                </h3>
                <div className="rating">
                  ★★★★☆ <span className="muted">4.7</span>
                </div>
                <div>
                  <span className="price">$1,049.00</span>
                </div>
                <button className="btn btn-sm">Add to cart</button>
              </div>
            </article>
          </div>

          {/* component: Pagination — links carry the full query string */}
          <nav className="pagination" aria-label="Pagination">
            <a className="page-link" href="#">
              ←
            </a>
            <a className="page-link" href="#" aria-current="page">
              1
            </a>
            <a className="page-link" href="#">
              2
            </a>
            <a className="page-link" href="#">
              3
            </a>
            <a className="page-link" href="#">
              …
            </a>
            <a className="page-link" href="#">
              9
            </a>
            <a className="page-link" href="#">
              →
            </a>
          </nav>
        </section>
      </div>
    </main>
  );
};

export default ProductsPage;
