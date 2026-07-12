import { NextPage } from "next";

const ProductDetailPage: NextPage = () => {
  return (
    <main className="container">
      <nav className="breadcrumb">
        <a href="index.html">Home</a> / <a href="category.html">Audio</a> /{" "}
        <span aria-current="page">Sony WH-1000XM5</span>
      </nav>

      <div className="pdp">
        {/* <!-- component: Gallery --> */}
        <div className="gallery">
          <div className="img-ph">MAIN IMG 4:3</div>
          <div className="thumbs">
            <div className="img-ph active">1</div>
            <div className="img-ph">2</div>
            <div className="img-ph">3</div>
            <div className="img-ph">4</div>
            <div className="img-ph">5</div>
          </div>
        </div>

        {/* <!-- component: BuyPanel --> */}
        <div className="buy-panel">
          <div className="eyebrow">Sony · Audio</div>
          <h1>Sony WH-1000XM5 wireless headphones</h1>
          <div className="rating">
            ★★★★☆ <span className="muted">4.7 · 1,284 reviews</span>
          </div>
          <p style={{ margin: "14px 0 6px" }}>
            <span className="price">$329.00</span>
            <span className="price-old">$399.00</span>
          </p>
          <p>
            <span className="badge badge-warn">Only 3 left</span>
          </p>

          <div className="buy-row">
            {/* <!-- component: QtyStepper --> */}
            <div className="qty-stepper">
              <button aria-label="Decrease quantity">−</button>
              <input type="text" value="1" aria-label="Quantity" />
              <button aria-label="Increase quantity">+</button>
            </div>
            <button className="btn btn-primary" style={{ flex: 1 }}>
              Add to cart
            </button>
          </div>

          {/* <!-- component: SpecsAccordion --> */}
          <div className="accordion">
            <details open>
              <summary>Description</summary>
              <div className="accordion-body">
                Industry-leading noise cancellation with 30-hour battery life.
                Replace with DummyJSON description.
              </div>
            </details>
            <details>
              <summary>Specifications</summary>
              <div className="accordion-body">
                Weight 250g · Bluetooth 5.2 · USB-C · Multipoint pairing.
              </div>
            </details>
            <details>
              <summary>Shipping and returns</summary>
              <div className="accordion-body">
                Free shipping over $50. 30-day returns.
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* <!-- component: RelatedProducts — same category, fetched in the same getStaticProps --> */}
      <section className="section">
        <div className="section-head">
          <h2>More in Audio</h2>
        </div>
        <div className="product-grid">
          <article className="product-card">
            <div className="img-ph">IMG</div>
            <div className="product-card-body">
              <h3 className="product-card-title">
                <a href="product-detail.html">Bose QC Ultra</a>
              </h3>
              <div className="rating">
                ★★★★☆ <span className="muted">4.6</span>
              </div>
              <div>
                <span className="price">$379.00</span>
              </div>
              <button className="btn btn-sm">Add to cart</button>
            </div>
          </article>
          <article className="product-card">
            <div className="img-ph">IMG</div>
            <div className="product-card-body">
              <h3 className="product-card-title">
                <a href="product-detail.html">AirPods Pro 2</a>
              </h3>
              <div className="rating">
                ★★★★☆ <span className="muted">4.7</span>
              </div>
              <div>
                <span className="price">$229.00</span>
              </div>
              <button className="btn btn-sm">Add to cart</button>
            </div>
          </article>
          <article className="product-card">
            <div className="img-ph">IMG</div>
            <div className="product-card-body">
              <h3 className="product-card-title">
                <a href="product-detail.html">JBL Charge 5</a>
              </h3>
              <div className="rating">
                ★★★★☆ <span className="muted">4.5</span>
              </div>
              <div>
                <span className="price">$139.00</span>
              </div>
              <button className="btn btn-sm">Add to cart</button>
            </div>
          </article>
          <article className="product-card">
            <div className="img-ph">IMG</div>
            <div className="product-card-body">
              <h3 className="product-card-title">
                <a href="product-detail.html">Sonos Era 100</a>
              </h3>
              <div className="rating">
                ★★★★☆ <span className="muted">4.4</span>
              </div>
              <div>
                <span className="price">$249.00</span>
              </div>
              <button className="btn btn-sm">Add to cart</button>
            </div>
          </article>
        </div>
      </section>

      {/* <!-- component: PdpSkeleton — render this whole block when router.isFallback is true --> */}
      {/* <div className="pdp">
        <div>
          <div className="skeleton" style="aspect-ratio:4/3;"></div>
        </div>
        <div>
          <div className="skeleton skeleton-line w60"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line w60"></div>
        </div>
      </div> */}
    </main>
  );
};

export default ProductDetailPage;
