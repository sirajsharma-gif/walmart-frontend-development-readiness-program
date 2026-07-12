import { NextPage } from "next";

const AdminPage: NextPage = () => {
  return (
    <main className="container">
      <div className="page-head">
        <div className="eyebrow">Admin</div>
        <h1>Products</h1>
        <p className="muted">
          Client-gated: redirect via router.replace in useEffect if no token.
          Mutations via TanStack Query with optimistic updates.
        </p>
      </div>

      {/* <!-- component: AdminToolbar --> */}
      <div className="admin-toolbar">
        <input
          type="search"
          placeholder="Filter by title…"
          aria-label="Filter products"
        />
        <button className="btn btn-primary">Add product</button>
      </div>

      {/* <!-- component: AdminTable --> */}
      <div className="card table-wrap">
        <table className="data">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div
                  className="img-ph"
                  style={{ width: "40px", aspectRatio: 1, borderRadius: "6px" }}
                ></div>
              </td>
              <td>iPhone 9 — 64GB</td>
              <td>Smartphones</td>
              <td className="num">$549.00</td>
              <td className="num">94</td>
              <td>
                <button className="btn btn-sm">Edit</button>{" "}
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="img-ph"
                  style={{ width: "40px", aspectRatio: 1, borderRadius: "6px" }}
                ></div>
              </td>
              <td>Sony WH-1000XM5</td>
              <td>Audio</td>
              <td className="num">$329.00</td>
              <td className="num">3</td>
              <td>
                <button className="btn btn-sm">Edit</button>{" "}
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="img-ph"
                  style={{ width: "40px", aspectRatio: 1, borderRadius: "6px" }}
                ></div>
              </td>
              <td>MacBook Pro 14"</td>
              <td>Laptops</td>
              <td className="num">$1,749.00</td>
              <td className="num">27</td>
              <td>
                <button className="btn btn-sm">Edit</button>{" "}
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <!-- component: Toast — show on mutation success/failure --> */}
      <div className="toast">Product updated</div>
    </main>
  );
};

export default AdminPage;
