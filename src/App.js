import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51QjHttHWWzPsOYKQk1fm9Snam8QHErvrIUINSJokUb369TQ37iHxeyxuGiOVxp1FZDoo9eBpDhFRgWP1wZ1rZs1H005o7lVjhE');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // this is a listener that listens to the user authentication state
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER", // set the user to null
          user: null,
        });
      }
    });

    // this empty array is used to run the useEffect only once when the app component loads
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <Header /> dont need header in sign in spo removed from global */}
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
