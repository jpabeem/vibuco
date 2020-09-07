import Layout from "../components/Layout";
import Link from 'next/link';

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit!");
  };

  return (
    <Layout>
      <div className="container my-5">
        <div className="grid">
          <div style={{margin: '0 auto'}} className="grid-item col-md-6">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </form>

            <div className="mt-5">
              <Link href="/register"><a>Register</a></Link>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
