import Layout from "../components/Layout";
import Link from 'next/link';
import { useAuthFunctions } from 'aws-cognito-next';
import NotLoggedIn from '../components/auth/NotLoggedIn';
import { useAuth } from "./_auth";

const Login = () => {
  const auth = useAuth(null);
  const { login } = useAuthFunctions();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit!");
  };

  const showForm = () => (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
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
  )

  return (
    <NotLoggedIn>
      <Layout>
        <div className="container my-5">
          <div className="grid">
            <div style={{margin: '0 auto'}} className="grid-item col-md-6">
              
              {/* {showForm()} */}

              {!auth ? <button onClick={login} className="btn btn-primary">Login</button> : null }

              <div className="mt-5">
                <Link href="/register"><a>Register</a></Link>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    </NotLoggedIn>
  );
};

export default Login;
