import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ExpandedSearch from "./ExpandedSearch";
import Login from "./Login";

function Header() {
  const categories = [
    {
      id: 1,
      title: "Avto",
      subcat: ["subcat1", "subcat1", "subcat1", "subcat1", "subcat1"],
    },
    {
      id: 2,
      title: "Elan",
      subcat: ["subcat1", "subcat1", "subcat1", "subcat1", "subcat1"],
    },
    {
      id: 3,
      title: "Elektronika",
      subcat: ["subcat1", "subcat1", "subcat1", "subcat1", "subcat1"],
    },
    {
      id: 4,
      title: "Emlak",
      subcat: ["subcat1", "subcat1", "subcat1", "subcat1", "subcat1"],
    },
    {
      id: 5,
      title: "Ikinci el",
      subcat: ["subcat1", "subcat1", "subcat1", "subcat1", "subcat1"],
    },
    {
      id: 6,
      title: "Geyim",
      subcat: ["subcat1", "subcat1", "subcat1", "subcat1", "subcat1"],
    },
  ];
  const [mobileMenu, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [category, setCategory] = useState(false);
  const [login, setLogin] = useState(false);
  const categoryDisplay = category ? "" : "none";
  const [mobileCategories, setMobileCategories] = useState(false);
  return (
    <header>
      {search && <ExpandedSearch setSearch={setSearch} />}
      {login && <Login setLogin={setLogin} />}
      <div className="row1">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/">Ana səhifə</NavLink>
            </li>
            <li>
              <NavLink>Biznes</NavLink>
            </li>
            <li>
              <NavLink>Yardım</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"account"}>
                <i class="fa-solid fa-user"></i> Hesab
              </NavLink>
            </li>
            <li onClick={() => setLogin(true)}>Qeydiyyat</li>
            <li>
              <NavLink to={"place-add"}>Elan yerləşdir</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-row1">
        <div className="mobile-row1-top">
          <div className="container-top-row">
            <button onClick={() => setMobile(true)}>
              <i class="fa-solid fa-bars"></i>
            </button>

            <h2>
              Logo <span>.</span>
            </h2>
            <button onClick={() => setLogin(true)} className="log">
              Daxil ol
            </button>
          </div>
        </div>
        <div className="container">
          <div className="search-bar">
            <input type="text" placeholder="Saytda axtarış edin..." />
          </div>
          <button onClick={() => setSearch(true)}>
            <i class="fa-solid fa-sliders"></i>
          </button>
        </div>
      </div>

      {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
      <div className="mobile-row2">
        <div className="container">
          <Link to={"/"} className="home">
            <i class="fa-solid fa-house"></i>
            <h6>Ana səhifə</h6>
          </Link>
          <div onClick={()=>setMobileCategories(true)} className="category">
            <i class="fa-solid fa-border-all"></i>
            <h6>Katatloq</h6>
          </div>
          <button className="fixed-add-button">
            <Link to={"place-add"}>
              <i class="fa-solid fa-plus"></i>
            </Link>
          </button>
          <Link to={"/favs"} className="favs">
            <i class="fa-solid fa-heart"></i>
            <h6>Seçilmişlər</h6>
          </Link>
          <Link to={"/account"} className="user">
            <i class="fa-solid fa-circle-user"></i>
            <h6>Kabinet</h6>
          </Link>
        </div>
      </div>

      {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
      <div className="row2">
        <div className="container">
          <div className="logo">
            <h1>
              Logo<span>.</span>
            </h1>
          </div>
          <div className="search-categories">
            <label
              onChange={() => {
                setCategory(!category);
              }}
              id="category-head"
            >
              Kateqoriyalar
              <input type="checkbox" name="" id="" className="checkbox-input" />
            </label>
            <div className="search-bar">
              <input type="text" name="search-onsite" />
              <button onClick={() => setSearch(true)}>Ətraflı axtarış</button>
              <button>Axtar</button>
            </div>
          </div>
        </div>
      </div>
      <div className={"category-menu"} style={{ display: categoryDisplay }}>
        <div className="container">
          <ul>
            <li>
              Nəqliyyat <i class="fa-solid fa-angle-right"></i>
            </li>
            <li>
              Əmlak <i class="fa-solid fa-angle-right"></i>
            </li>
            <li>
              Aksessuar <i class="fa-solid fa-angle-right"></i>
            </li>
            <li>
              İş elanı <i class="fa-solid fa-angle-right"></i>
            </li>
            <li>
              Elektronika <i class="fa-solid fa-angle-right"></i>
            </li>
            <li>
              Ev əşyaları <i class="fa-solid fa-angle-right"></i>
            </li>
            <li>
              Geyim <i class="fa-solid fa-angle-right"></i>
            </li>
          </ul>
          <div className="category-content-wrapper">
            <h2>Category name</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda doloremque cumque quaerat dolorem voluptas sed, illo
              molestiae veniam nam odio eligendi dicta non optio exercitationem
              necessitatibus eaque maiores odit ab?
            </p>
          </div>
        </div>
      </div>
      {mobileCategories ? (
        <div className="mobile-category">
          <div className="headline">
            <div className="container">
              <h2>Kateqoriyalar</h2>
              <button onClick={() => setMobileCategories(false)}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div className="container">
            <ul>
              <li>
                Nəqliyyat <i class="fa-solid fa-angle-right"></i>
              </li>
              <li>
                Əmlak <i class="fa-solid fa-angle-right"></i>
              </li>
              <li>
                Aksessuar <i class="fa-solid fa-angle-right"></i>
              </li>
              <li>
                İş elanı <i class="fa-solid fa-angle-right"></i>
              </li>
              <li>
                Elektronika <i class="fa-solid fa-angle-right"></i>
              </li>
              <li>
                Ev əşyaları <i class="fa-solid fa-angle-right"></i>
              </li>
              <li>
                Geyim <i class="fa-solid fa-angle-right"></i>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      {mobileMenu ? (
        <div className={"mobile-menu"}>
          <div onClick={() => setMobile(false)} className="close">
            <i class="fa-solid fa-xmark "></i>
          </div>
          <div className="profile">
            <div className="img">
              <i class="fa-solid fa-user"></i>
            </div>
          </div>
          <Link
            onClick={() => {
              setLogin(true);
              setMobile(false);
            }}
          >
            Hesabınıza daxil olun
          </Link>
          <ul onClick={() => setMobile(false)}>
            <li>
              <Link to={"/"}>
                <i class="fa-solid fa-house"></i>Ana səhifə
              </Link>
            </li>
            <li>
              <Link to={"/place-add"}>
                <i class="fa-solid fa-plus"></i>Elan yerləşdir
              </Link>
            </li>
            <li>
              <Link to={"/favs"}>
                <i class="fa-solid fa-heart"></i>Seçilmişlər
              </Link>
            </li>
            <li>
              <Link to={"/businness"}>
                <i class="fa-solid fa-business-time"></i>Biznes
              </Link>
            </li>
            <li>
              <Link to={"/help"}>
                <i class="fa-solid fa-circle-info"></i> Yardım
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
