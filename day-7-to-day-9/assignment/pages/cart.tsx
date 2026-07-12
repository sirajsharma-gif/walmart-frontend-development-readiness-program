import { NextPage } from "next";
import Link from "next/link";

const CartPage: NextPage = () => {
  return (
    <main className="container">
      <div className="page-head">
        <div className="eyebrow">Cart</div>
        <h1>
          Your cart{" "}
          <span className="muted mono" style={{ fontSize: "1rem" }}>
            (3 items)
          </span>
        </h1>
      </div>

      <div className="cart-layout">
        <section>
          {/* <!-- component: CartLine — repeat per item --> */}
          <div className="cart-line">
            <div className="img-ph">IMG</div>
            <div>
              <p className="cart-line-title">
                <a href="product-detail.html">Sony WH-1000XM5</a>
              </p>
              <p className="muted" style={{ margin: 0, fontSize: "13px" }}>
                Audio · Black
              </p>
            </div>
            <div className="qty-stepper">
              <button aria-label="Decrease quantity">−</button>
              <input type="text" value="1" aria-label="Quantity" />
              <button aria-label="Increase quantity">+</button>
            </div>
            <span className="price">$329.00</span>
            <button className="remove-link">Remove</button>
          </div>
          <div className="cart-line">
            <div className="img-ph">IMG</div>
            <div>
              <p className="cart-line-title">
                <a href="product-detail.html">iPhone 9 — 64GB</a>
              </p>
              <p className="muted" style={{ margin: 0, fontSize: "13px" }}>
                Smartphones · Space Gray
              </p>
            </div>
            <div className="qty-stepper">
              <button aria-label="Decrease quantity">−</button>
              <input type="text" value="2" aria-label="Quantity" />
              <button aria-label="Increase quantity">+</button>
            </div>
            <span className="price">$1,098.00</span>
            <button className="remove-link">Remove</button>
          </div>

          {/* <!-- component: EmptyCart — render when the store has no items
    <div className="empty-state">
      <h2>Your cart is empty</h2>
      <p><a className="btn btn-primary" href="products.html">Browse products</a></p>
    </div>
    --> */}
        </section>

        {/* <!-- component: SummaryCard --> */}
        <aside className="card summary-card">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span className="mono">$1,427.00</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="mono">Free</span>
          </div>
          <div className="summary-row">
            <span>Tax (est.)</span>
            <span className="mono">$128.43</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="mono">$1,555.43</span>
          </div>
          <Link
            className="btn btn-primary btn-block"
            href="/checkout"
            style={{ marginTop: "16px" }}
          >
            Checkout
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default CartPage;
