import { NextPage } from "next";

const OrdersPage: NextPage = () => {
  return (
    <main className="container">
      <div className="page-head">
        <div className="eyebrow">Account</div>
        <h1>Your orders</h1>
      </div>

      {/* <!-- component: OrdersTable --> */}
      <div className="card table-wrap">
        <table className="data">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Items</th>
              <th>Status</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="num">#10245</td>
              <td>Jul 8, 2026</td>
              <td>3</td>
              <td>
                <span className="badge badge-ok">Delivered</span>
              </td>
              <td className="num">$1,555.43</td>
              <td>
                <a href="order-detail.html">View</a>
              </td>
            </tr>
            <tr>
              <td className="num">#10198</td>
              <td>Jun 21, 2026</td>
              <td>1</td>
              <td>
                <span className="badge badge-accent">Shipped</span>
              </td>
              <td className="num">$329.00</td>
              <td>
                <a href="order-detail.html">View</a>
              </td>
            </tr>
            <tr>
              <td className="num">#10032</td>
              <td>May 2, 2026</td>
              <td>2</td>
              <td>
                <span className="badge badge-danger">Cancelled</span>
              </td>
              <td className="num">$948.00</td>
              <td>
                <a href="order-detail.html">View</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default OrdersPage;
