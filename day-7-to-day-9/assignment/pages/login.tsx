const LoginPage = () => {
  return (
    <main className="container">
      {/* component: AuthCard — POST to /api/auth/login, which sets the httpOnly cookie */}
      <div className="card auth-card">
        <div className="eyebrow">Account</div>
        <h1>Log in</h1>
        <p className="muted">
          DummyJSON demo user: <span className="mono">emilys / emilyspass</span>
        </p>
        <div className="field">
          <label htmlFor="u">Username</label>
          <input id="u" type="text" placeholder="emilys" />
        </div>
        <div className="field">
          <label htmlFor="p">Password</label>
          <input id="p" type="password" placeholder="••••••••" />
        </div>
        <button className="btn btn-primary btn-block">Log in</button>
        <p className="muted" style={{ marginTop: "14px", fontSize: "13px" }}>
          Redirects back to <span className="mono">?next=</span> after success.
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
