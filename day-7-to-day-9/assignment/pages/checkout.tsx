import { NextPage } from "next";

const CheckoutPage: NextPage = () => {
  return (
    <main className="container">
      <div className="checkout-main">
        <div className="page-head">
          <div className="eyebrow">Checkout</div>
          <h1>Almost there</h1>
          <p className="muted">
            This page never renders for logged-out users — getServerSideProps
            redirects them to /login?next=/checkout.
          </p>
        </div>

        {/* <!-- component: OrderSummaryCompact --> */}
        <section className="card checkout-section">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Sony WH-1000XM5 × 1</span>
            <span className="mono">$329.00</span>
          </div>
          <div className="summary-row">
            <span>iPhone 9 — 64GB × 2</span>
            <span className="mono">$1,098.00</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="mono">$1,555.43</span>
          </div>
        </section>

        {/* <!-- component: AddressForm --> */}
        <section className="card checkout-section">
          <h2>Shipping address</h2>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" placeholder="Siraj Sharma" />
          </div>
          <div className="field">
            <label htmlFor="addr">Address</label>
            <input id="addr" type="text" placeholder="221B Mall Road" />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="city">City</label>
              <input id="city" type="text" placeholder="Mandi" />
            </div>
            <div className="field">
              <label htmlFor="pin">PIN code</label>
              <input id="pin" type="text" placeholder="175001" />
            </div>
          </div>
        </section>

        {/* <!-- component: PaymentForm (fake) --> */}
        <section className="card checkout-section">
          <h2>Payment</h2>
          <div className="field">
            <label htmlFor="card">Card number</label>
            <input id="card" type="text" placeholder="4242 4242 4242 4242" />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="exp">Expiry</label>
              <input id="exp" type="text" placeholder="12/28" />
            </div>
            <div className="field">
              <label htmlFor="cvc">CVC</label>
              <input id="cvc" type="text" placeholder="123" />
            </div>
          </div>
        </section>

        <button className="btn btn-primary btn-block">
          Place order · $1,555.43
        </button>
      </div>
    </main>
  );
};

export default CheckoutPage;
