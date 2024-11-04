

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    // For example, you can send the username and password to an API for authentication
    console.log("Username:", username);
    console.log("Password:", password);

    // If authentication is successful, navigate to the profile page
    navigate("/profile");

    // Reset the form
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-8">
            <div className="logo flex justify-center">
              <img src="/img/zelenkapa1.png" alt="" />
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form onSubmit={handleSignIn}>
                  <div className="p-1 border-1 border-black rounded-lg relative m-3">
                    <label
                      htmlFor="username"
                      className="absolute bg-white -top-4 left-4"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="outline-none rounded-lg w-full"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="p-1 relative m-3 border-1 rounded-lg border-black">
                    <label
                      htmlFor="password"
                      className="absolute bg-white -top-4 left-4"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="outline-none border-black rounded-lg w-full"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="absolute left-[15%] text-center ml-5 p-2 bg-[#3CA082] text-white rounded-xl w-3/5 flex justify-center"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="h-5 m-4"></div>
                <div className="text-center" style={{ marginTop: "2.438rem" }}>
                  <Link className="link" >
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center mt-3">
                  <p>
                    Don't have an account?{" "}
                    <Link to="/signup" className="link">
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-outline-secondary w-100 mb-2">
                    <i className="fa-brands fa-google" /> Sign in with Google
                  </button>

                  <button className="btn btn-outline-secondary w-100 mb-2">
                    Sign in with Microsoft
                  </button>
                 <Link to="/profile" className="btn btn-outline-secondary w-100">
                    Sign in with Phone Number
                 </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img className="signin-bg" src="/img/phone2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
