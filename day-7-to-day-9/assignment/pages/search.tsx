import { NextPage } from "next";

const SearchPage: NextPage = () => {
  return (
    <main className="container">
      {/* <!-- component: SearchBox --> */}
      <div className="search-hero">
        <div className="eyebrow">Search</div>
        <h1>Find your next upgrade</h1>
        <input
          type="search"
          placeholder="Search 194 products…"
          aria-label="Search products"
        />
      </div>

      {/* <!-- state 1: idle — show before the first keystroke --> */}
      <div className="empty-state">
        <h2>Start typing to search</h2>
        <p>Try "laptop", "headphones", or "monitor".</p>
      </div>

      {/* <!-- state 2: loading — component: SkeletonGrid (swap in while fetching) --> */}
      <div className="product-grid" style={{ marginTop: "32px" }}>
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
      </div>

      {/* <!-- state 3: empty results --> */}
      <div className="empty-state" style={{ marginTop: "32px" }}>
        <h2>No matches for "flying car"</h2>
        <p>
          Check the spelling, or <a href="products.html">browse all products</a>
          .
        </p>
      </div>

      {/* <!-- state 4: results — reuse .product-grid with ProductCard, plus a results count --> */}
    </main>
  );
};

export default SearchPage;
