import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import ExpandedSearch from "./ExpandedSearch";
import Login from "./Login";

function Header({ user }) {
  const [mobileMenu, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [category, setCategory] = useState(false);
  const [login, setLogin] = useState(false);
  const [mobileCategories, setMobileCategories] = useState(false);
  console.log(user);

  return (
    <>
      {login && <Login setLogin={setLogin} />}

      <nav id="desktop-nav">
        <div className="top">
          <div className="container">
            <ul>
              <li>
                <NavLink to={"/"}>Ana Səhifə</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Biznes</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Yardım</NavLink>
              </li>
            </ul>
            <ul>
              {!localStorage.getItem("hash") ? (
                <li>
                  <button onClick={(e) => setLogin(true)}>Giriş</button>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to={"/account"}>Hesab</NavLink>
                  </li>
                  <li>
                    <button
                      onClick={(e) => {
                        localStorage.removeItem("hash");
                        window.location.reload();
                      }}
                    >
                      Çıxış
                    </button>
                  </li>
                </>
              )}

              <li>
                <NavLink to={"/place-add"}>Elan yerləşdir</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="logo">Xeyli.az</div>
            <div className="btn">
              <button>Kateqoriyalar</button>
            </div>
            <div className="search">
              <input type="text" />
              <button>Axtar</button>
              <button>Axtar</button>
            </div>
          </div>
        </div>
      </nav>
      <div id="mobile-nav">
        <div className="row-top">
          <i class="fa-solid fa-bars"></i>
          <div className="logo-mob">
            <Link to={"/"}>
              <h1>Xeyli.az</h1>
            </Link>
          </div>
          <button onClick={()=> setLogin(true)} id="login-btn">Giriş</button>
        </div>
        <div className="row-btm">
          <ul>
            <li>
              <Link to={"/home"}>
                <i class="fa-solid fa-house"></i>
              </Link>
              <h6>Ana səhifə</h6>
            </li>
            <li>
              <div className="categories">
                <i class="fa-solid fa-check-double"></i>
              </div>
              <h6>Kateqoriyalar</h6>
            </li>
            <li>
              <Link to={"/place-add"}>
                <i class="fa-solid fa-plus"></i>
              </Link>
              <h6>Elan yerləşdir</h6>
            </li>
            <li>
              <Link to={"/favs"}>
                <i class="fa-solid fa-heart"></i>
              </Link>
              <h6>Seçilmişlər</h6>
            </li>
            <li>
              <Link to={"/account"}>
                <i class="fa-solid fa-user"></i>
              </Link>
              <h6>Hesab</h6>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="mobile-menu">
        <div className="close-btn">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <ul>
          <li>
            <Link to="/">Ana Səhifə</Link>
            <Link to="/busin">Biznes</Link>
            <Link to="/help">Yardım</Link>
            <Link to="/about-us">Haqqımızda</Link>
          </li>
        </ul>
      </div> */}
    </>
  );
}
const t = (a) => a;
export default connect(t)(Header);
