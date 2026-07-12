import { NextPage } from "next";

const OrderDetailPage: NextPage = () => {
  return (
    <main className="container">
      <nav className="breadcrumb">
        <a href="orders.html">Orders</a> /{" "}
        <span aria-current="page">#10245</span>
      </nav>

      <div className="page-head">
        <h1>
          Order <span className="mono">#10245</span>{" "}
          <span className="badge badge-ok">Delivered</span>
        </h1>
        <p className="muted">
          Placed Jul 8, 2026 · getServerSideProps returns notFound: true if this
          order isn't yours.
        </p>
      </div>

      <div className="cart-layout">
        <section>
          {/* <!-- component: OrderLine — like CartLine, read-only --> */}
          <div
            className="cart-line"
            style={{ gridTemplateColumns: "88px 1fr auto auto" }}
          >
            <div className="img-ph">IMG</div>
            <div>
              <p className="cart-line-title">Sony WH-1000XM5</p>
              <p className="muted" style={{ margin: 0, fontSize: "13px" }}>
                Qty 1
              </p>
            </div>
            <span className="price">$329.00</span>
            <a href="product-detail.html" className="btn btn-sm">
              Buy again
            </a>
          </div>
          <div
            className="cart-line"
            style={{ gridTemplateColumns: "88px 1fr auto auto" }}
          >
            <div className="img-ph">IMG</div>
            <div>
              <p className="cart-line-title">iPhone 9 — 64GB</p>
              <p className="muted" style={{ margin: 0, fontSize: "13px" }}>
                Qty 2
              </p>
            </div>
            <span className="price">$1,098.00</span>
            <a href="product-detail.html" className="btn btn-sm">
              Buy again
            </a>
          </div>
        </section>

        <aside className="card summary-card">
          <h2>Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span className="mono">$1,427.00</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span className="mono">$128.43</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="mono">$1,555.43</span>
          </div>
          <div className="summary-row" style={{ marginTop: "12px" }}>
            <span>Shipped to</span>
            <span>Mandi, HP 175001</span>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default OrderDetailPage;
