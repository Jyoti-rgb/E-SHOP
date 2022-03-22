import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { db } from "../Firebase/firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/");
        const user = userCredential.user;
      })

      .catch((error) => alert(error.message));
  }

  function register(e) {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //  create user
        if (userCredential) {
          navigate("/");
          const user = userCredential.user;
        }
      })
      .catch((error) => alert(error.message));
  }

  useEffect(async () => {
    const docRef = doc(db, "login");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }, []);

  return (
    <div className="login">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          className="login__registerButton"
          style={{ cursor: "pointer" }}
          onClick={register}
        >
          Create your eShop Account
        </button>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default Login;
