import { createBrowserHistory } from "history";
import { hasData } from "jquery";
import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Account from "./pages/Account";
import Details from "./pages/Details";
import Favs from "./pages/Favs";
import Home from "./pages/Home";
import PlaceAdd from "./pages/PlaceAdd";

function App({ dispatch, user }) {
  const [addName, setName] = useState(false);
  useState(() => {
    fetch(
      `https://elanlar.im/app/profile.php?mod=my&hash=${localStorage.getItem(
        "hash"
      )}`
    )
      .then((a) => a.json())
      .then((a) => {
        console.log(a);
        dispatch({
          type: "USER_INFO",
          payload: a[0],
        });
      });
  }, [user]);

  useEffect(() => {
    if (user) {
      console.log(user.name);
    } else {
      console.log("no-user");
    }
  }, []);

  useEffect(()=> {
    fetch()
  }, [])

  return (
    <>
      <Header />

      <Routes basename='/' history={createBrowserHistory}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/place-add" element={<PlaceAdd />} />
        <Route path="/account" element={<Account />} />
        <Route path="/favs" element={<Favs/>} />
        <Route path="*" element={<Navigate to='/' />} />

      </Routes>
      <br />
      <Footer />
    </>
  );
}
const t = (a) => a;
export default connect(t)(App);
